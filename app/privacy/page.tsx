import LegalLayout from "../components/LegalLayout";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "../data.json";

export default function PrivacyPolicy() {
  return (
    <LegalLayout title={data.legal.privacy.title} lastUpdated={data.legal.privacy.lastUpdated}>
      <div className="flex flex-col gap-6 text-gray-600 leading-relaxed">
        {data.legal.privacy.content.map((section, idx) => {
          if (section.type === "heading") {
            return <h2 key={idx} className="text-2xl font-bold text-gray-900 mt-6 mb-2">{section.text}</h2>;
          } else if (section.type === "paragraph") {
            return <p key={idx}>{section.text}</p>;
          } else if (section.type === "list") {
            return (
              <ul key={idx} className="list-disc pl-6 flex flex-col gap-2">
                {section.items?.map((item, lIdx) => (
                  <li key={lIdx}>{item}</li>
                ))}
              </ul>
            );
          } else if (section.type === "address") {
            return (
              <p key={idx} className="font-semibold text-gray-900 bg-gray-50 p-4 rounded-xl border border-gray-100 whitespace-pre-line">
                {section.text}
              </p>
            );
          }
          return null;
        })}
      </div>
    </LegalLayout>
  );
}
