import SectionTitle from "./SectionTitle";
import { config } from "../data/config";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../utils/i18n";

export default function Contact() {
  const { contact, contactSection, aboutDoctor, doctor } = config;
  const { lang } = useLanguage();

  return (
    <section id="contact" className="section">
      <div className="container-base">
        <SectionTitle title={contactSection.sectionTitle} subtitle={contactSection.sectionSubtitle} />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <p className="text-sm uppercase tracking-wide text-brand-600">{tr(contactSection.addressLabel, lang)}</p>
            <p className="mt-2 text-slate-700">{contact.address}</p>

            <p className="mt-6 text-sm uppercase tracking-wide text-brand-600">{tr(contactSection.phoneLabel, lang)}</p>
            <a href={`tel:+${contact.phoneRaw}`} className="mt-2 block text-slate-700 hover:text-brand-700">
              {contact.phoneDisplay}
            </a>

            <p className="mt-6 text-sm uppercase tracking-wide text-brand-600">
              {tr(aboutDoctor.consultationFeeLabel, lang)}
            </p>
            <p className="mt-2 font-semibold text-slate-800">{doctor.consultationFee}</p>
          </div>
          <iframe
            title={contactSection.mapTitle}
            src={contact.mapEmbedUrl}
            loading="lazy"
            className="h-[360px] w-full rounded-3xl border-0 shadow-soft"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
