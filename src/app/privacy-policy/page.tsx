export default function PrivacyPolicyPage() {
  return (
    <main className="prose mx-auto p-6 flex flex-col items-center">
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> May 2, 2025
      </p>

      <p>
        Your privacy is important to us. This Privacy Policy explains how we
        collect, use, and protect your personal information when you use our
        quiz application (“App”).
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>User Identifier:</strong> We generate a unique ID to identify
          you in our app.
        </li>
        <li>
          <strong>Username:</strong> A temporary username is assigned or chosen
          by you for the quiz experience.
        </li>
        <li>
          <strong>Usage Data:</strong> We collect data such as quiz performance
          and timestamps to improve the app.
        </li>
        <li>
          <strong>Cookies:</strong> Used to store session info, not for external
          tracking.
        </li>
      </ul>

      <h2>2. Use of Information</h2>
      <p>
        We use the information to create rooms, show results, detect misuse, and
        improve performance.
      </p>

      <h2>3. Google AdSense</h2>
      <p>
        We use Google AdSense to display ads. It may collect device data and use
        cookies.
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more here
        </a>
        .
      </p>

      <h2>4. Data Retention</h2>
      <p>Quiz room data is temporary and removed after inactivity.</p>

      <h2>5. Your Rights</h2>
      <p>You may request your session data to be deleted.</p>

      <h2>6. Changes to This Policy</h2>
      <p>We may update this policy. Changes will be shown here.</p>

      <h2>7. Contact Us</h2>
      <p>
        Email:{" "}
        <a href="mailto:MedLetterApp@example.com">MedLetterApp@example.com</a>
      </p>
    </main>
  );
}
