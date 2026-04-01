import { config } from "../data/config";

export default function Footer() {
  const { brand, contact, footer } = config;

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-base py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold text-slate-800">Clinic</p>
            <p className="mt-2 text-sm text-slate-500">{brand.clinicName}</p>
            <p className="text-sm text-slate-500">{contact.phoneDisplay}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Hours</p>
            {footer.hours.map((hour) => (
              <p key={hour} className="mt-2 text-sm text-slate-500">
                {hour}
              </p>
            ))}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Emergency</p>
            <a href={`tel:+${contact.phoneRaw}`} className="mt-2 block text-sm text-brand-700">
              {footer.emergencyNumber}
            </a>
            <div className="mt-3 flex flex-wrap gap-3">
              {footer.socials.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-slate-500 hover:text-brand-700">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-500">
            {footer.legalLinks.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-brand-700">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
