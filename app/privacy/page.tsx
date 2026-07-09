import LegalLayout from "../components/LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="October 2026">
      <div className="flex flex-col gap-6 text-gray-600 leading-relaxed">
        <p>
          At A-Cube Institute of Skills, accessible from acubeskills.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by A-Cube Institute of Skills and how we use it.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-6">1. Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li><strong>Personal Information Provided by You.</strong> We collect names; phone numbers; email addresses; job titles; contact preferences; and other similar information.</li>
          <li><strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Website.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-6">2. How We Use Your Information</h2>
        <p>
          We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>To facilitate account creation and logon process.</li>
          <li>To send administrative information to you.</li>
          <li>To fulfill and manage your orders/requests.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-6">3. Sharing Your Information</h2>
        <p>
          We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-6">4. Contact Us</h2>
        <p>
          If you have questions or comments about this notice, you may email us at acubeskills@gmail.com or by post to:
        </p>
        <p className="font-semibold text-gray-900 bg-gray-50 p-4 rounded-xl border border-gray-100">
          A-Cube Institute of Skills<br />
          No:84, Sai Best Complex, Second Floor, <br />
          Kuppana Chetty Street, Palladam road, <br />
          Tiruppur- 641604
        </p>
      </div>
    </LegalLayout>
  );
}
