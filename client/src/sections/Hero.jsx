import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { heroImage } from '../data/projects.js';

const EASE = [0.22, 1, 0.36, 1];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.45 } } };
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-24%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[620px] overflow-hidden bg-ink">
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Contemporary luxury villa at dusk"
          className="h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: EASE }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/25 to-ink/75" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full items-end"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="shell w-full pb-24 text-warm-white sm:pb-28"
        >
          <motion.p variants={item} className="label text-warm-white/70">
            Private Residences • Architecture • Design
          </motion.p>

          <motion.h1
            variants={item}
            className="display mt-7 text-[clamp(3rem,9.5vw,9rem)] uppercase"
          >
            Your space.
            <br />
            Your vision.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-md text-sm font-light leading-relaxed text-warm-white/75 sm:text-base"
          >
            Exceptional homes designed around the way you live.
          </motion.p>

          <motion.div variants={item} className="mt-11 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="label border border-warm-white/40 px-7 py-4 transition-all duration-500 ease-editorial hover:border-warm-white hover:bg-warm-white hover:text-charcoal"
            >
              Explore projects →
            </Link>
            <Link
              to="/contact"
              className="label bg-warm-white px-7 py-4 text-charcoal transition-all duration-500 ease-editorial hover:bg-sand"
            >
              Start your project →
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 right-6 z-10 hidden items-center gap-4 text-warm-white/60 lg:flex lg:right-16"
      >
        <span className="label">Scroll to explore ↓</span>
        <motion.span
          className="block h-14 w-px origin-top bg-warm-white/40"
          animate={{ scaleY: [0.2, 1, 0.2] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
