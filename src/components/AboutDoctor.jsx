import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { config } from "../data/config";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../utils/i18n";

export default function AboutDoctor() {
  const { doctor, images, aboutDoctor } = config;
  const { lang } = useLanguage();

  return (
    <section id="doctor" className="section bg-white">
      <div className="container-base">
        <SectionTitle title={aboutDoctor.sectionTitle} subtitle={aboutDoctor.sectionSubtitle} />
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4 }}
            className="mx-auto w-full max-w-2xl rounded-3xl bg-white p-3 shadow-soft"
          >
            <img
              src={images.doctor}
              alt={images.alt.doctor || doctor.name}
              loading="lazy"
              className="h-auto max-h-[520px] w-full rounded-2xl object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-brand-50 p-8"
          >
            <h3 className="text-2xl font-bold text-slate-900">{doctor.name}</h3>
            <p className="mt-4 text-slate-600">{tr(doctor.bio, lang)}</p>

            <div className="mt-6 border-t border-brand-100 pt-5">
              <h4 className="text-lg font-semibold text-slate-900">{tr(aboutDoctor.quickInfoTitle, lang)}</h4>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-slate-500">{tr(aboutDoctor.specializationLabel, lang)}</p>
                  <p className="font-semibold text-slate-800">{tr(doctor.specialization, lang)}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">{tr(aboutDoctor.languagesLabel, lang)}</p>
                  <p className="font-semibold text-slate-800">{doctor.languagesSpoken}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">{tr(aboutDoctor.qualificationsLabel, lang)}</p>
                  <p className="font-semibold text-slate-800">{doctor.qualifications}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">{tr(aboutDoctor.experienceLabel, lang)}</p>
                  <p className="font-semibold text-slate-800">{doctor.experience}</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm text-slate-500">{tr(aboutDoctor.membershipsLabel, lang)}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                  {doctor.memberships.map((membership) => (
                    <li key={membership}>{membership}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
