import Page from '../components/Page.jsx';
import PageHero from '../components/PageHero.jsx';
import { ImageReveal, Reveal } from '../components/Reveal.jsx';
import Approach from '../sections/Approach.jsx';
import Stats from '../sections/Stats.jsx';
import CTA from '../sections/CTA.jsx';
import { aboutHeader, aboutStudio, philosophyDetail } from '../data/projects.js';

export default function About() {
  return (
    <Page>
      <PageHero
        image={aboutHeader}
        eyebrow="The studio"
        title="We design the way you live."
        intro="ARCORA is an architecture and design studio creating contemporary private residences across the Middle East, Europe and beyond."
      />

      <section className="py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label text-charcoal/45">01 — Our story</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-6 text-[clamp(1.75rem,3.6vw,2.75rem)] uppercase">
                A quiet, rigorous way of building.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.12}>
              <p className="text-base font-light leading-relaxed text-charcoal/70">
                ARCORA was founded on a simple belief: a home should be designed around the people
                who live in it, not around a style. We begin every project by listening — to how you
                spend a morning, where the light falls, what you want to feel when you walk through
                the door.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-6 text-base font-light leading-relaxed text-charcoal/70">
                From that understanding we build architecture that is calm, generous and
                unmistakably yours. Our work spans private residences, interiors and landscapes,
                delivered by one studio from first sketch to handover.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="shell mt-16 grid gap-6 sm:grid-cols-12">
          <ImageReveal
            src={aboutStudio}
            alt="ARCORA studio interior"
            className="sm:col-span-7 aspect-[4/3]"
            imgClassName="h-full w-full object-cover"
          />
          <ImageReveal
            src={philosophyDetail}
            alt="Material detail from an ARCORA residence"
            className="sm:col-span-5 aspect-[4/3] sm:mt-14"
            imgClassName="h-full w-full object-cover"
            delay={0.1}
          />
        </div>
      </section>

      <section className="bg-off-white py-20 lg:py-28">
        <div className="shell">
          <Reveal>
            <p className="label text-charcoal/45">02 — What guides us</p>
          </Reveal>
          <div className="mt-12 grid gap-12 sm:grid-cols-3">
            {[
              {
                title: 'Restraint',
                body: 'We remove until only the essential remains, so proportion, light and material can speak.',
              },
              {
                title: 'Craft',
                body: 'Details are resolved at full scale, with makers we trust and materials we know intimately.',
              },
              {
                title: 'Longevity',
                body: 'We design for decades of use — buildings that age well and feel better with time.',
              },
            ].map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <h3 className="font-display text-2xl font-light">{value.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-charcoal/60">{value.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Approach />
      <CTA />
    </Page>
  );
}
