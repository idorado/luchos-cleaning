export const metadata = {
  title: 'Terms of Service | Kathy Clean',
  description: 'Terms of Service for Kathy Clean.',
};

export default function Page() {
  return (
    <main className="prose mx-auto p-6">
      <h1>Terms of Service</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>Use of Services</h2>
      <p>
        These Terms govern the use of Kathy Clean's website and services. This is placeholder
        text you can replace later with your final policy.
      </p>

      <h2>Liability</h2>
      <p>
        Services are provided on a best-effort basis. Please review your quote and service agreement
        for details specific to your booking.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? <a href="mailto:support@kathyclean.com">support@kathyclean.com</a>
      </p>
    </main>
  );
}
