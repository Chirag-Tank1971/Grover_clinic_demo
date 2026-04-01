import { motion } from "framer-motion";
import { config } from "../data/config";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../utils/i18n";

export default function Hero() {
  const { brand, hero, images, contact } = config;
  const { lang } = useLanguage();

  return (
    <section id="home" className="section bg-gradient-to-b from-brand-50 to-transparent">
      <div className="container-base grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 inline-flex rounded-full bg-white px-4 py-1 text-sm font-semibold text-brand-700 shadow-soft">
            {tr(hero.trustBadge, lang)}
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            {tr(hero.headlinePrefix, lang)} {brand.city}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-600">{tr(brand.tagline, lang)}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${contact.whatsappRaw}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700"
            >
              {tr(hero.primaryCta, lang)}
            </a>
            <a
              href={`tel:+${contact.phoneRaw}`}
              className="rounded-full border border-brand-600 px-6 py-3 font-semibold text-brand-700 hover:bg-brand-50"
            >
              {tr(hero.secondaryCta, lang)}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <img
            src={images.hero}
            alt={images.alt.hero}
            loading="eager"
            className="h-[420px] w-full rounded-3xl object-cover shadow-soft"
          />
        </motion.div>
      </div>
    </section>
  );
}
