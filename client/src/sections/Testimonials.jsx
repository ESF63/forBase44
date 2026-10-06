import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Reveal } from '../components/Reveal.jsx';
import { testimonials } from '../data/content.js';

const EASE = [0.22, 1, 0.36, 1];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];
  const go = (step) => setIndex((i) => (i + step + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 lg:py-36">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="label text-charcoal/45">05 — Testimonials</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-6 text-[clamp(2rem,4.4vw,3.5rem)] uppercase">
                What our
                <br />
                clients say
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-10 flex gap-3">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => go(-1)}
                  className="flex h-12 w-12 items-center justify-center border border-charcoal/20 text-sm transition-colors duration-500 hover:bg-charcoal hover:text-warm-white"
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => go(1)}
                  className="flex h-12 w-12 items-center justify-center border border-charcoal/20 text-sm transition-colors duration-500 hover:bg-charcoal hover:text-warm-white"
                >
                  →
                </button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="min-h-[260px] sm:min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.55, ease: EASE }}
                >
                  <p className="font-display text-[clamp(1.5rem,3.1vw,2.5rem)] font-light leading-snug">
                    &ldquo;{active.quote}&rdquo;
                  </p>
                  <footer className="mt-10 border-t border-charcoal/10 pt-6">
                    <p className="label">— {active.name}</p>
                    <p className="mt-2 text-xs tracking-wide text-charcoal/50">{active.detail}</p>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex gap-2">
              {testimonials.map((testimonial, i) => (
                <button
                  key={testimonial.name}
                  type="button"
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-px w-12 transition-colors duration-500 ${
                    i === index ? 'bg-charcoal' : 'bg-charcoal/25'
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
