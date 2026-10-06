import { Reveal } from '../components/Reveal.jsx';
import { stages } from '../data/content.js';

export default function Approach() {
  return (
    <section className="bg-off-white py-24 lg:py-36">
      <div className="shell">
        <div className="max-w-2xl">
          <Reveal>
            <p className="label text-charcoal/45">03 — Our approach</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-6 text-[clamp(2.25rem,5.4vw,4.5rem)] uppercase">
              From idea to home.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px border-t border-charcoal/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {stages.map((stage, i) => (
            <Reveal
              key={stage.number}
              delay={i * 0.12}
              className="border-b border-charcoal/10 py-10 sm:px-6 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <span className="font-display text-[clamp(3rem,5vw,4.5rem)] font-light leading-none text-charcoal/20">
                {stage.number}
              </span>
              <h3 className="label mt-8">{stage.title}</h3>
              <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-charcoal/60">
                {stage.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
