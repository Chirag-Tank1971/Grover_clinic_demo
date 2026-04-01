import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { config } from "../data/config";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../utils/i18n";

export default function Appointment() {
  const { appointment, contact, leadFlow } = config;
  const { lang } = useLanguage();
  const [form, setForm] = useState({ name: "", phone: "", date: "", slot: "morning" });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const text =
      `${appointment.whatsappTemplate}%0A` +
      `${tr(appointment.labels.name, lang)}: ${form.name}%0A` +
      `${tr(appointment.labels.phone, lang)}: ${form.phone}%0A` +
      `${tr(appointment.labels.date, lang)}: ${form.date}%0A` +
      `${tr(appointment.labels.slot, lang)}: ${form.slot}`;

    const payload = {
      name: form.name,
      phone: form.phone,
      preferredDate: form.date,
      preferredSlot: form.slot,
      source: "website"
    };

    if (leadFlow.googleSheetWebhook) {
      try {
        await fetch(leadFlow.googleSheetWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
      } catch (error) {
        console.error("Lead webhook failed", error);
      }
    }

    const emailBody =
      `Name: ${form.name}%0D%0A` +
      `Phone: ${form.phone}%0D%0A` +
      `Preferred Date: ${form.date}%0D%0A` +
      `Preferred Slot: ${form.slot}`;
    window.open(`mailto:${contact.email}?subject=${encodeURIComponent(leadFlow.emailSubject)}&body=${emailBody}`);
    window.open(`https://wa.me/${contact.whatsappRaw}?text=${text}`, "_blank");
  };

  return (
    <section id="appointment" className="section">
      <div className="container-base">
        <SectionTitle
          title={appointment.sectionTitle}
          subtitle={appointment.sectionSubtitle}
        />
        <form
          onSubmit={onSubmit}
          className="mx-auto grid max-w-2xl gap-4 rounded-3xl bg-white p-6 shadow-soft md:p-8"
        >
          <label className="text-sm font-semibold text-slate-700" htmlFor="name">
            {tr(appointment.labels.name, lang)}
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={onChange}
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none ring-brand-200 focus:ring"
            placeholder={tr(appointment.placeholders.name, lang)}
          />

          <label className="text-sm font-semibold text-slate-700" htmlFor="phone">
            {tr(appointment.labels.phone, lang)}
          </label>
          <input
            id="phone"
            name="phone"
            required
            value={form.phone}
            onChange={onChange}
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none ring-brand-200 focus:ring"
            placeholder={tr(appointment.placeholders.phone, lang)}
          />

          <label className="text-sm font-semibold text-slate-700" htmlFor="date">
            {tr(appointment.labels.date, lang)}
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            value={form.date}
            onChange={onChange}
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none ring-brand-200 focus:ring"
          />
          <label className="text-sm font-semibold text-slate-700" htmlFor="slot">
            {tr(appointment.labels.slot, lang)}
          </label>
          <select
            id="slot"
            name="slot"
            value={form.slot}
            onChange={onChange}
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none ring-brand-200 focus:ring"
          >
            {appointment.slotOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {tr(option.label, lang)}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="mt-2 rounded-full bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700"
          >
            {tr(appointment.submitText, lang)}
          </button>
        </form>
      </div>
    </section>
  );
}
