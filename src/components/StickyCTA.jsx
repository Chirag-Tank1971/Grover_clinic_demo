import { Phone, MessageCircle } from "lucide-react";
import { config } from "../data/config";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../utils/i18n";

export default function StickyCTA() {
  const { contact, stickyCta } = config;
  const { lang } = useLanguage();

  return (
    <>
      <a
        href={`https://wa.me/${contact.whatsappRaw}`}
        target="_blank"
        rel="noreferrer"
        aria-label={stickyCta.whatsappAriaLabel}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-105"
      >
        <MessageCircle />
      </a>

      <a
        href={`tel:+${contact.phoneRaw}`}
        className="fixed bottom-5 left-5 z-50 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg md:hidden"
      >
        <Phone size={18} /> {tr(stickyCta.mobileCallText, lang)}
      </a>
    </>
  );
}
