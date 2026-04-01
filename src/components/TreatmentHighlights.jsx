import SectionTitle from "./SectionTitle";
import { config } from "../data/config";

export default function TreatmentHighlights() {
  return (
    <section className="section">
      <div className="container-base">
        <SectionTitle
          title={config.treatmentHighlights.sectionTitle}
          subtitle={config.treatmentHighlights.sectionSubtitle}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {config.treatmentHighlights.items.map((item) => (
            <article key={item.name} className="rounded-2xl bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  <span className="font-semibold text-slate-800">Who needs this:</span> {item.who}
                </li>
                <li>
                  <span className="font-semibold text-slate-800">Time:</span> {item.time}
                </li>
                <li>
                  <span className="font-semibold text-slate-800">Cost range:</span> {item.cost}
                </li>
                <li>
                  <span className="font-semibold text-slate-800">Pain level:</span> {item.pain}
                </li>
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
