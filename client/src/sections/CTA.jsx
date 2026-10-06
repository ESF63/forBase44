import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal.jsx';
import { ctaImage } from '../data/projects.js';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <img
        src={ctaImage}
        alt="Luxury villa exterior at golden hour"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/60" />

      <div className="shell relative z-10 py-28 text-center text-warm-white lg:py-40">
        <Reveal>
          <h2 className="display text-[clamp(2.5rem,7.5vw,6.5rem)] uppercase">
            Ready to create
            <br />
            your space?
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mx-auto mt-7 max-w-md text-sm font-light leading-relaxed text-warm-white/70">
            Tell us about your vision and let&rsquo;s turn it into architecture.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <Link
            to="/contact"
            className="label mt-11 inline-block border border-warm-white/40 px-9 py-4 transition-all duration-500 ease-editorial hover:border-warm-white hover:bg-warm-white hover:text-charcoal"
          >
            Start your project →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
