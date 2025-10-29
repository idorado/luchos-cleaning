"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: Object[] | undefined;
    gtag?: (...args: any[]) => void;
  }
}

const TALLY_ORIGIN_RE = /^https:\/\/([a-z0-9-]+\.)?tally\.so$/i;

function safeParse<T = any>(v: any): T | null {
  if (typeof v !== "string") return v ?? null;
  try {
    return JSON.parse(v);
  } catch {
    return null;
  }
}

// Returns true if this submissionId was already fired in this session
function isDuplicate(submissionId?: string | null): boolean {
  if (!submissionId) return false;
  try {
    const key = `tally_submit_${submissionId}`;
    if (sessionStorage.getItem(key)) return true;
    sessionStorage.setItem(key, "1");
  } catch {
    // ignore
  }
  return false;
}

function pushDataLayer(payload: {
  formId?: string;
  formName?: string;
  submissionId?: string;
  source: "tally_iframe" | "tally_dom";
}) {
  if (!Array.isArray(window.dataLayer)) window.dataLayer = [];
  window.dataLayer.push({
    event: "tally_form_submitted",
    formId: payload.formId,
    formName: payload.formName,
    submissionId: payload.submissionId,
    source: payload.source,
  });
}

export default function TallyListener() {
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      // Accept only tally.so origins (with or without subdomain)
      if (!event.origin || !TALLY_ORIGIN_RE.test(event.origin)) return;

      const parsed = safeParse<any>(event.data);
      if (!parsed || parsed.event !== "Tally.FormSubmitted") return;

      const formId = parsed?.payload?.formId as string | undefined;
      const formName = parsed?.payload?.formName as string | undefined;
      const submissionId =
        (parsed?.payload?.submissionId as string | undefined) ||
        (parsed?.payload?.id as string | undefined);

      if (isDuplicate(submissionId)) {
        try { console.log("[Tally] duplicate submit ignored", submissionId); } catch {}
        return;
      }

      // Primary path: GTM
      pushDataLayer({ formId, formName, submissionId, source: "tally_iframe" });

      // Optional: fire via gtag only if available as a function
      if (typeof window.gtag === "function") {
        try {
          // GA4 (optional)
          window.gtag("event", "generate_lead", {
            method: "tally_iframe",
            form_id: formId,
            form_name: formName,
          });
          // Google Ads (optional direct)
          window.gtag("event", "conversion", {
            send_to: "AW-17062489970/XHAECLjasMkaEPLeg8g_",
          });
        } catch { /* no-op */ }
      }

      try {
        console.log("[Tally] pushed tally_form_submitted (iframe)", {
          formId, formName, submissionId,
        });
      } catch {}
    };

    const onCustomEvent = (ev: Event) => {
      // Accept a DOM CustomEvent fired from elsewhere in the app:
      // window.dispatchEvent(new CustomEvent("tally:form-submitted", { detail: { formId, formName, submissionId }}));
      const detail = (ev as CustomEvent).detail || {};
      const formId = detail?.formId as string | undefined;
      const formName = detail?.formName as string | undefined;
      const submissionId = detail?.submissionId as string | undefined;

      if (isDuplicate(submissionId)) {
        try { console.log("[Tally] duplicate submit (dom) ignored", submissionId); } catch {}
        return;
      }

      // Primary path: GTM
      pushDataLayer({ formId, formName, submissionId, source: "tally_dom" });

      if (typeof window.gtag === "function") {
        try {
          window.gtag("event", "generate_lead", {
            method: "tally_dom",
            form_id: formId,
            form_name: formName,
          });
          window.gtag("event", "conversion", {
            send_to: "AW-17062489970/XHAECLjasMkaEPLeg8g_",
          });
        } catch { /* no-op */ }
      }

      try {
        console.log("[Tally] pushed tally_form_submitted (dom)", {
          formId, formName, submissionId,
        });
      } catch {}
    };

    window.addEventListener("message", onMessage);
    window.addEventListener("tally:form-submitted", onCustomEvent as EventListener);

    return () => {
      window.removeEventListener("message", onMessage);
      window.removeEventListener("tally:form-submitted", onCustomEvent as EventListener);
    };
  }, []);

  return null;
}
