import Page from '../components/Page.jsx';
import PageHero from '../components/PageHero.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { studio } from '../data/content.js';
import { contactHeader } from '../data/projects.js';

const details = [
  { label: 'Email', value: studio.email, href: `mailto:${studio.email}` },
  { label: 'Phone', value: studio.phone, href: `tel:${studio.phone.replace(/\s/g, '')}` },
  { label: 'Location', value: studio.location },
];

export default function Contact() {
  return (
    <Page>
      <PageHero
        image={contactHeader}
        eyebrow="Contact"
        title="Let's create something timeless."
        intro="Tell us about your site, your vision and how you want to live. We will take it from there."
      />

      <section className="py-20 lg:py-28">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="label text-charcoal/45">Project inquiry</p>
            </Reveal>
            <Reveal delay={0.08} className="mt-10">
              <ContactForm />
            </Reveal>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <ul className="border-t border-charcoal/10">
              {details.map((detail) => (
                <li key={detail.label} className="border-b border-charcoal/10 py-8">
                  <p className="label text-charcoal/40">{detail.label}</p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="mt-3 block text-base font-light text-charcoal/80 transition-colors duration-300 hover:text-charcoal"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="mt-3 text-base font-light text-charcoal/80">{detail.value}</p>
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm font-light leading-relaxed text-charcoal/55">
              Studio hours: Monday to Friday, 9:00 – 18:00 GST.
            </p>
          </aside>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="shell">
          <Reveal>
            <p className="label text-charcoal/45">Find us</p>
          </Reveal>
          <div className="mt-8 overflow-hidden border border-charcoal/10">
            <iframe
              title="ARCORA studio location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=55.1900%2C25.1500%2C55.3500%2C25.2700&layer=mapnik&marker=25.2048%2C55.2708"
              loading="lazy"
              className="h-[360px] w-full grayscale-[85%] sm:h-[420px]"
            />
          </div>
        </div>
      </section>
    </Page>
  );
}
