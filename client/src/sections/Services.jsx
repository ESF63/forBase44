import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal.jsx';
import { services } from '../data/content.js';

export default function Services() {
  return (
    <section className="py-24 lg:py-36">
      <div className="shell">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <p className="label text-charcoal/45">04 — Services</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-6 text-[clamp(2.25rem,5.6vw,4.75rem)] uppercase">
                What we do
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-xs text-sm font-light leading-relaxed text-charcoal/60">
              A single studio, from the first concept through to the final detail.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 border-t border-charcoal/10">
          {services.map((service, i) => (
            <li key={service.title} className="border-b border-charcoal/10">
              <Link
                to="/services"
                className="group flex flex-col gap-3 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:py-10"
              >
                <div className="flex items-baseline gap-6">
                  <span className="label text-charcoal/30">0{i + 1}</span>
                  <h3 className="font-display text-3xl font-light leading-none transition-transform duration-700 ease-editorial group-hover:translate-x-2 sm:text-[40px]">
                    {service.title}
                  </h3>
                </div>
                <p className="max-w-sm text-sm font-light leading-relaxed text-charcoal/55 sm:text-right">
                  {service.description}
                </p>
                <span className="label hidden text-charcoal/35 transition-all duration-500 ease-editorial group-hover:translate-x-2 group-hover:text-charcoal sm:block">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
