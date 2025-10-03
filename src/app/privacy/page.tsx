export const metadata = {
  title: 'Privacy Policy | Kathy Clean',
  description: 'Privacy Policy for Kathy Clean.',
};

export default function Page() {
  return (
    <main className="prose mx-auto p-6">
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>Information We Collect</h2>
      <p>
        Contact details and service preferences you provide via our forms and communication channels.
      </p>

      <h2>How We Use It</h2>
      <p>
        To prepare quotes, schedule services, and improve our website. We do not sell your personal data.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may request access, correction, or deletion of your data at any time by contacting us.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? <a href="mailto:support@kathyclean.com">support@kathyclean.com</a>
      </p>
    </main>
  );
}
