import { Phone } from "lucide-react";
import { config } from "../data/config";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../utils/i18n";

export default function EmergencyBar() {
  const { lang } = useLanguage();

  return (
    <div className="sticky top-16 z-30 border-b border-red-100 bg-red-50">
      <div className="container-base flex items-center justify-between gap-3 py-2">
        <p className="text-sm font-medium text-red-700">{tr(config.emergencyCta.text, lang)}</p>
        <a
          href={`tel:+${config.contact.phoneRaw}`}
          className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-1.5 text-xs font-semibold text-white"
        >
          <Phone size={14} />
          {tr(config.emergencyCta.button, lang)}
        </a>
      </div>
    </div>
  );
}
