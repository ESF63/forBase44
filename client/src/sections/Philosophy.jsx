import { Link } from 'react-router-dom';
import { ImageReveal, Reveal } from '../components/Reveal.jsx';
import { philosophyDetail, philosophyImage } from '../data/projects.js';

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36">
      <div className="shell">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ImageReveal
              src={philosophyImage}
              alt="Interior courtyard of a contemporary villa"
              className="aspect-[4/5] w-full lg:aspect-[3/4]"
              imgClassName="h-full w-full object-cover"
            />
          </div>

          <div className="relative z-10 lg:col-span-6 lg:col-start-6 lg:-mt-44">
            <div className="bg-warm-white px-0 pt-12 lg:px-14 lg:py-16">
              <Reveal>
                <p className="label text-charcoal/45">01 — Our philosophy</p>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="display mt-7 text-[clamp(2rem,4.6vw,3.75rem)] uppercase">
                  We don&rsquo;t just design houses.
                  <span className="mt-2 block italic text-charcoal/70">
                    We design the way you live.
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-8 max-w-lg text-sm font-light leading-relaxed text-charcoal/65 sm:text-base">
                  Every residence begins with an idea, a lifestyle and a vision. We transform those
                  elements into spaces that feel timeless, personal and completely yours.
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <Link to="/about" className="link-line mt-10 inline-block">
                  Discover our story →
                </Link>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mt-10 grid lg:mt-4 lg:grid-cols-12">
          <ImageReveal
            src={philosophyDetail}
            alt="Detail of a luxury residence interior"
            className="aspect-[3/2] w-full lg:col-span-4 lg:col-start-9 lg:aspect-[4/3]"
            imgClassName="h-full w-full object-cover"
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
}
