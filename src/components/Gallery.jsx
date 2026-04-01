import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { config } from "../data/config";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../utils/i18n";

export default function Gallery() {
  const { lang } = useLanguage();
  const images = config.images.gallery;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);

  return (
    <section id="gallery" className="section bg-white">
      <div className="container-base">
        <SectionTitle title={config.gallery.sectionTitle} subtitle={config.gallery.sectionSubtitle} />
        <div className="mx-auto max-w-6xl rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-100 to-white p-5 shadow-soft">
          <div className="relative h-[560px] overflow-hidden rounded-2xl bg-slate-900/95 md:h-[620px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[index]}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                src={images[index]}
                alt={`${tr(config.gallery.imageAltPrefix, lang)} ${index + 1}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-contain p-3"
              />
            </AnimatePresence>

            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous interior image"
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 text-slate-700 shadow transition hover:scale-105"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next interior image"
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 text-slate-700 shadow transition hover:scale-105"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {images.map((img, dotIndex) => (
              <button
                key={img}
                type="button"
                onClick={() => setIndex(dotIndex)}
                aria-label={`Go to interior image ${dotIndex + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  dotIndex === index ? "w-6 bg-brand-600" : "w-2.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
