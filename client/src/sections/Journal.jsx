import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal.jsx';
import { journal } from '../data/projects.js';

export default function Journal() {
  return (
    <section className="bg-off-white py-24 lg:py-32">
      <div className="shell">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <p className="label text-charcoal/45">06 — Visual journal</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-6 text-[clamp(2rem,4.8vw,4rem)] uppercase">
                The architectural journal
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-xs text-sm font-light leading-relaxed text-charcoal/60">
              Fragments of light, material and form from our recent work.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {journal.map((entry, i) => (
            <Reveal key={entry.title} delay={(i % 4) * 0.06}>
              <Link
                to="/projects"
                className="group relative block aspect-[4/5] overflow-hidden bg-beige"
              >
                <img
                  src={entry.image}
                  alt={entry.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end justify-center bg-ink/0 pb-7 transition-colors duration-500 ease-editorial group-hover:bg-ink/45">
                  <span className="label translate-y-3 text-warm-white opacity-0 transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
                    View →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
