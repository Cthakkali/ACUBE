import LegalLayout from "../components/LegalLayout";
import data from "../data.json";

export default function TermsOfService() {
  return (
    <LegalLayout title={data.legal.terms.title} lastUpdated={data.legal.terms.lastUpdated}>
      <div className="flex flex-col gap-6 text-gray-600 leading-relaxed">
        {data.legal.terms.content.map((section, idx) => {
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
          }
          return null;
        })}
      </div>
    </LegalLayout>
  );
}
