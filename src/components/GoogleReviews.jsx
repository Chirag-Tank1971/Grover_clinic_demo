import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { config } from "../data/config";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../utils/i18n";

const PER_PAGE = 2;

export default function GoogleReviews() {
  const { lang } = useLanguage();
  const reviews = config.reviews.items;
  const pageCount = Math.ceil(reviews.length / PER_PAGE) || 1;
  const [page, setPage] = useState(0);

  const pair = useMemo(() => {
    const start = page * PER_PAGE;
    return reviews.slice(start, start + PER_PAGE);
  }, [page, reviews]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % pageCount);
    }, 4500);
    return () => clearInterval(timer);
  }, [pageCount]);

  const goPrev = () => {
    setPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  const goNext = () => {
    setPage((prev) => (prev + 1) % pageCount);
  };

  return (
    <section id="reviews" className="section">
      <div className="container-base">
        <SectionTitle title={config.reviews.sectionTitle} />
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white p-6 shadow-soft">
          <div>
            <p className="text-3xl font-bold text-slate-900">{config.reviews.rating} / 5</p>
            <p className="text-sm text-slate-500">{config.reviews.totalReviews} reviews</p>
          </div>
          <div className="flex gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star key={idx} size={18} fill="currentColor" />
            ))}
          </div>
          <a
            href={config.contact.reviewUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white"
          >
            {tr(config.reviews.cta, lang)}
          </a>
        </div>
        <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-5 shadow-soft md:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              {pair.map((review) => (
                <article
                  key={`${review.name}-${review.date}`}
                  className="flex h-full flex-col rounded-2xl border border-slate-100 bg-slate-50/80 p-5"
                >
                  <p className="flex-1 text-sm leading-relaxed text-slate-700 md:text-base">
                    "{review.review}"
                  </p>
                  <p className="mt-4 text-sm font-semibold text-slate-900 md:text-base">{review.name}</p>
                  {review.date ? <p className="mt-1 text-xs text-slate-500 md:text-sm">{review.date}</p> : null}
                </article>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous reviews"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next reviews"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {Array.from({ length: pageCount }).map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  type="button"
                  onClick={() => setPage(dotIndex)}
                  aria-label={`Go to reviews page ${dotIndex + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    dotIndex === page ? "w-6 bg-brand-600" : "w-2.5 bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
