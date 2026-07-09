import LegalLayout from "../components/LegalLayout";
import data from "../data.json";

export default function Disclaimer() {
  return (
    <LegalLayout title={data.legal.disclaimer.title} lastUpdated={data.legal.disclaimer.lastUpdated}>
      <div className="flex flex-col gap-6 text-gray-600 leading-relaxed">
        {data.legal.disclaimer.content.map((section, idx) => {
          if (section.type === "heading") {
            return <h2 key={idx} className="text-2xl font-bold text-gray-900 mt-6 mb-2">{section.text}</h2>;
          } else if (section.type === "paragraph") {
            return <p key={idx}>{section.text}</p>;
          }
          return null;
        })}
      </div>
    </LegalLayout>
  );
}
