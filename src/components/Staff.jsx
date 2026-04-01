import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { config } from "../data/config";

export default function Staff() {
  const { staff } = config;

  return (
    <section id="staff" className="section bg-white">
      <div className="container-base">
        <SectionTitle title={staff.sectionTitle} subtitle={staff.sectionSubtitle} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {staff.members.map((member, idx) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="overflow-hidden rounded-2xl bg-slate-50 shadow-soft"
            >
              <img
                src={member.image}
                alt={member.alt || member.name}
                loading="lazy"
                className="h-64 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-brand-700">{member.role}</p>
                <p className="mt-2 text-sm text-slate-600">{member.bio}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
