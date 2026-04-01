import { config } from "../data/config";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../utils/i18n";

export default function Navbar() {
  const { navigation, brand, contact } = config;
  const { lang, setLang } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <nav className="container-base flex h-16 items-center justify-between">
        <a href="#home" className="text-lg font-bold text-brand-700">
          {brand.clinicName}
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {navigation.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-slate-700 hover:text-brand-700">
                {tr(link.label, lang)}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-2 md:flex">
          <span className="text-xs text-slate-500">{tr(config.ui.language.label, lang)}</span>
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
            className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700"
          >
            {lang === "en" ? config.ui.language.hi : config.ui.language.en}
          </button>
        </div>
        <a
          href={`tel:+${contact.phoneRaw}`}
          className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
        >
          {tr(navigation.callCta, lang)}
        </a>
      </nav>
    </header>
  );
}
