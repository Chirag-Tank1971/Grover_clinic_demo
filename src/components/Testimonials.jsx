import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { config } from "../data/config";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-white">
      <div className="container-base">
        <SectionTitle
          title={config.testimonials.sectionTitle}
          subtitle={config.testimonials.sectionSubtitle}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {config.testimonials.items.map((item, idx) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="rounded-2xl bg-slate-50 p-6 shadow-soft"
            >
              <p className="text-slate-700">"{item.review}"</p>
              <footer className="mt-4 text-sm font-semibold text-brand-700">- {item.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
