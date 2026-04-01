import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../utils/i18n";

export default function SectionTitle({ title, subtitle }) {
  const { lang } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4 }}
      className="mb-10 text-center"
    >
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{tr(title, lang)}</h2>
      {subtitle ? <p className="mx-auto mt-3 max-w-2xl text-slate-600">{tr(subtitle, lang)}</p> : null}
    </motion.div>
  );
}
