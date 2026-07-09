import LegalLayout from "../components/LegalLayout";

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="October 2026">
      <div className="flex flex-col gap-6 text-gray-600 leading-relaxed">
        <p>
          Welcome to A-Cube Institute of Skills! These terms and conditions outline the rules and regulations for the use of A-Cube Institute of Skills's Website, located at acubeskills.in.
        </p>
        <p>
          By accessing this website we assume you accept these terms and conditions. Do not continue to use A-Cube Institute of Skills if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-6">1. License</h2>
        <p>
          Unless otherwise stated, A-Cube Institute of Skills and/or its licensors own the intellectual property rights for all material on A-Cube Institute of Skills. All intellectual property rights are reserved. You may access this from A-Cube Institute of Skills for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>Republish material from A-Cube Institute of Skills</li>
          <li>Sell, rent or sub-license material from A-Cube Institute of Skills</li>
          <li>Reproduce, duplicate or copy material from A-Cube Institute of Skills</li>
          <li>Redistribute content from A-Cube Institute of Skills</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-6">2. User Responsibilities</h2>
        <p>
          You agree to use this website only for lawful purposes, and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content or disrupting the normal flow of dialogue within this website.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-6">3. Disclaimer</h2>
        <p>
          To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website.
        </p>
        <p>
          As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
        </p>
      </div>
    </LegalLayout>
  );
}
