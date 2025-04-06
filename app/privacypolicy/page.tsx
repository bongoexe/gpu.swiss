// page.tsx
// Remove the PrivacyPolicy component from here

// app/privacypolicy/page.tsx
export default function PrivacyPolicy() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 space-y-6 text-gray-800 bg-gray-50">
      <h1 className="text-4xl font-bold text-center">Privacy Policy</h1>
      <section className="max-w-3xl space-y-4 text-left text-base">
        <p>
          At gpu.swiss, we are fully committed to protecting your personal data and operating in full compliance with the revised Swiss Federal Act on Data Protection (nFADP) effective as of September 1, 2023.
        </p>
        <p>
          We only collect data that is strictly necessary for operating our GPU rental platform. This includes basic contact and billing information submitted through direct inquiry. We do not track users, and no analytics or tracking tools store personally identifiable data.
        </p>
        <p>
          All data is stored exclusively on servers physically located in Switzerland. We do not use foreign cloud providers or transmit data abroad.
        </p>
        <p>
          Our infrastructure is operated privately and independently, ensuring full control and accountability over data handling processes. Access to all data is restricted and managed according to the principles of privacy by design and by default, in line with Articles 7 and 8 of the nFADP.
        </p>
        <p>
          Individuals may request access, correction, or deletion of their data at any time by contacting us at <a href="mailto:sales@gpu.swiss" className="underline">sales@swissgpu.ch</a>.
        </p>
        <p className="text-sm text-gray-500 italic">
          This service is currently in beta and information contained in this policy may be subject to updates or corrections.
        </p>
        <p>
          <a href="/" className="text-red-600 underline">← Back to Home</a>
        </p>
      </section>
    </main>
  );
}
