import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from '../components/Reveal.jsx';
import { cinematicImage } from '../data/projects.js';

export default function Cinematic() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} className="relative h-[78vh] min-h-[520px] overflow-hidden bg-ink">
      <motion.img
        style={{ y }}
        src={cinematicImage}
        alt="Modern villa at sunset"
        loading="lazy"
        className="absolute inset-0 h-[124%] w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/50" />

      <div className="shell relative z-10 flex h-full flex-col items-center justify-center text-center text-warm-white">
        <Reveal>
          <h2 className="display text-[clamp(2.25rem,6.2vw,5.5rem)] uppercase">
            Where architecture
            <br />
            meets life.
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-7 text-sm font-light text-warm-white/70">
            Thoughtful spaces. Timeless design.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <Link
            to="/projects"
            className="label mt-10 inline-block border border-warm-white/40 px-8 py-4 transition-all duration-500 ease-editorial hover:border-warm-white hover:bg-warm-white hover:text-charcoal"
          >
            Explore our work →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
