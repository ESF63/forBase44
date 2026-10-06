import Counter from '../components/Counter.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { stats } from '../data/content.js';

export default function Stats() {
  return (
    <section className="bg-charcoal py-20 text-warm-white lg:py-28">
      <div className="shell">
        <Reveal>
          <p className="label text-warm-white/40">Why ARCORA</p>
        </Reveal>

        <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <p className="font-display text-[clamp(3rem,6.5vw,5.5rem)] font-light leading-none">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="label mt-6 text-warm-white/50">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
