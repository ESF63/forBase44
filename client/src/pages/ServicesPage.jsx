import Page from '../components/Page.jsx';
import PageHero from '../components/PageHero.jsx';
import { Reveal } from '../components/Reveal.jsx';
import Approach from '../sections/Approach.jsx';
import CTA from '../sections/CTA.jsx';
import { services } from '../data/content.js';
import { servicesHeader } from '../data/projects.js';

export default function ServicesPage() {
  return (
    <Page>
      <PageHero
        image={servicesHeader}
        eyebrow="Services"
        title="What we do"
        intro="One studio, one point of responsibility — from the first conversation to the day you move in."
      />

      <section className="py-20 lg:py-28">
        <div className="shell">
          <ul className="border-t border-charcoal/10">
            {services.map((service, i) => (
              <li key={service.title} className="border-b border-charcoal/10">
                <div className="grid gap-6 py-12 lg:grid-cols-12 lg:gap-10">
                  <Reveal className="lg:col-span-4">
                    <div className="flex items-baseline gap-6">
                      <span className="label text-charcoal/30">0{i + 1}</span>
                      <h2 className="font-display text-3xl font-light leading-none sm:text-[40px]">
                        {service.title}
                      </h2>
                    </div>
                  </Reveal>
                  <Reveal delay={0.08} className="lg:col-span-7 lg:col-start-6">
                    <p className="text-sm font-light uppercase tracking-wide text-charcoal/45">
                      {service.description}
                    </p>
                    <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-charcoal/70">
                      {service.detail}
                    </p>
                  </Reveal>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Approach />
      <CTA />
    </Page>
  );
}
