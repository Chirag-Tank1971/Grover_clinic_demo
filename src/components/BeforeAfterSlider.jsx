import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { config } from "../data/config";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);

  return (
    <section className="section bg-white">
      <div className="container-base">
        <SectionTitle title={config.beforeAfter.sectionTitle} subtitle={config.beforeAfter.sectionSubtitle} />
        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-100 p-4 shadow-soft">
          <div className="relative h-[360px] overflow-hidden rounded-2xl">
            <img
              src={config.images.beforeAfter.before}
              alt="Before treatment"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute left-3 top-3 z-20 rounded-full bg-brand-600/90 px-3 py-1 text-xs font-semibold text-white">
              After
            </span>
            <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
              <img
                src={config.images.beforeAfter.after}
                alt="After treatment"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="absolute right-3 top-3 z-20 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold text-white">
              Before
            </span>
            <div className="absolute inset-y-0" style={{ left: `calc(${position}% - 1px)` }}>
              <div className="h-full w-0.5 bg-white shadow" />
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            className="mt-4 w-full"
          />
        </div>
      </div>
    </section>
  );
}
