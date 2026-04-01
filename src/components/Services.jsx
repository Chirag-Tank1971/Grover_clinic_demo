import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, ScanLine, Smile } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { config } from "../data/config";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../utils/i18n";

const icons = [Sparkles, ShieldCheck, ScanLine, Smile];

export default function Services() {
  const { lang } = useLanguage();

  return (
    <section id="services" className="section">
      <div className="container-base">
        <SectionTitle
          title={config.services.sectionTitle}
          subtitle={config.services.sectionSubtitle}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {config.services.items.map((service, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="rounded-2xl bg-white p-6 shadow-soft"
              >
                <Icon className="mb-4 text-brand-600" />
                <h3 className="text-lg font-semibold text-slate-900">{tr(service.title, lang)}</h3>
                <p className="mt-2 text-sm text-slate-600">{tr(service.description, lang)}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
