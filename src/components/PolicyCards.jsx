import SectionTitle from "./SectionTitle";
import { config } from "../data/config";

export default function PolicyCards() {
  return (
    <section className="section bg-white">
      <div className="container-base">
        <SectionTitle title={config.policies.sectionTitle} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {config.policies.cards.map((card) => (
            <article key={card.title} className="rounded-2xl bg-slate-50 p-6 shadow-soft">
              <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
