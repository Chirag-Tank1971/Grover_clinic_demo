import { config } from "../data/config";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../utils/i18n";

export default function DoctorCredibilityStrip() {
  const { lang } = useLanguage();

  return (
    <section className="py-8">
      <div className="container-base grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {config.doctor.credibility.map((item) => (
          <article key={item.value} className="rounded-2xl bg-white p-5 shadow-soft">
            <p className="text-xs uppercase tracking-wide text-brand-600">{tr(item.label, lang)}</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">{item.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
