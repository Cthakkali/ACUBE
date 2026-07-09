import LegalLayout from "../components/LegalLayout";

export default function Disclaimer() {
  return (
    <LegalLayout title="Disclaimer" lastUpdated="October 2026">
      <div className="flex flex-col gap-6 text-gray-600 leading-relaxed">
        <p>
          The information contained on acubeskills.in website (the "Service") is for general information purposes only.
        </p>

        <p>
          A-Cube Institute of Skills assumes no responsibility for errors or omissions in the contents on the Service.
        </p>

        <p>
          In no event shall A-Cube Institute of Skills be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. A-Cube Institute of Skills reserves the right to make additions, deletions, or modification to the contents on the Service at any time without prior notice.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-6">External Links Disclaimer</h2>
        <p>
          acubeskills.in website may contain links to external websites that are not provided or maintained by or in any way affiliated with A-Cube Institute of Skills.
        </p>
        <p>
          Please note that the A-Cube Institute of Skills does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-6">Professional Disclaimer</h2>
        <p>
          The services information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of specific legal or HR compliance advice online.
        </p>
      </div>
    </LegalLayout>
  );
}
