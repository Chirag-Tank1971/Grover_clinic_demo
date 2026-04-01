import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { config } from "../data/config";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../utils/i18n";

export default function WhyChooseUs() {
  const { lang } = useLanguage();

  return (
    <section className="section">
      <div className="container-base">
        <SectionTitle
          title={config.whyChooseUs.sectionTitle}
          subtitle={config.whyChooseUs.sectionSubtitle}
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {config.whyChooseUs.items.map((point, idx) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.3, delay: idx * 0.06 }}
              className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-soft"
            >
              <CheckCircle2 className="shrink-0 text-brand-600" />
              <p className="font-medium text-slate-700">{tr(point, lang)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
