import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { config } from "../data/config";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section">
      <div className="container-base">
        <SectionTitle title={config.faq.sectionTitle} />
        <div className="mx-auto max-w-4xl space-y-3">
          {config.faq.items.map((item, idx) => {
            const open = openIndex === idx;
            return (
              <article key={item.q} className="rounded-2xl bg-white p-5 shadow-soft">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : idx)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="font-semibold text-slate-900">{item.q}</span>
                  <span className="text-brand-700">{open ? "-" : "+"}</span>
                </button>
                {open ? <p className="mt-3 text-sm text-slate-600">{item.a}</p> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
