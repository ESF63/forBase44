import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Page from '../components/Page.jsx';
import Lightbox from '../components/Lightbox.jsx';
import { ImageReveal, Reveal } from '../components/Reveal.jsx';
import CTA from '../sections/CTA.jsx';
import { projects } from '../data/projects.js';

const galleryLayout = [
  'sm:col-span-7 aspect-[4/3]',
  'sm:col-span-5 aspect-[4/5]',
  'sm:col-span-5 aspect-[4/5]',
  'sm:col-span-7 aspect-[4/3]',
];

export default function ProjectDetail() {
  const { slug } = useParams();
  const [lightbox, setLightbox] = useState(null);
  const index = projects.findIndex((project) => project.slug === slug);

  if (index === -1) return <Navigate to="/projects" replace />;

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const previous = projects[(index - 1 + projects.length) % projects.length];

  const blocks = [
    { title: 'Concept', body: project.concept },
    { title: 'Design', body: project.design },
    { title: 'Materials', body: project.materials },
  ];

  return (
    <Page>
      <section className="relative flex h-[92svh] min-h-[600px] items-end overflow-hidden bg-ink">
        <img src={project.cover} alt={project.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/20 to-ink/80" />

        <div className="shell relative z-10 pb-16 text-warm-white sm:pb-20">
          <Reveal>
            <p className="label text-warm-white/60">
              {String(index + 1).padStart(2, '0')} — {project.location}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display mt-6 text-[clamp(2.25rem,6.4vw,5.5rem)] uppercase">
              {project.name}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-warm-white/70">
              {project.summary}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="shell">
          <dl className="grid grid-cols-2 gap-8 border-y border-charcoal/10 py-10 sm:grid-cols-4">
            {[
              ['Location', project.location],
              ['Year', project.year],
              ['Architecture', project.architecture],
              ['Interior design', project.interiorDesign],
            ].map(([term, value]) => (
              <div key={term}>
                <dt className="label text-charcoal/40">{term}</dt>
                <dd className="mt-3 text-sm font-light text-charcoal/80">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <p className="label text-charcoal/45">The project</p>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            {blocks.map((block, i) => (
              <Reveal key={block.title} delay={i * 0.08} className="border-t border-charcoal/10 py-10 first:border-t-0 first:pt-0">
                <h2 className="label">{block.title}</h2>
                <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-charcoal/70">
                  {block.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="shell">
          <Reveal>
            <p className="label text-charcoal/45">Gallery</p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-12 sm:gap-6">
            {project.gallery.map((image, i) => (
              <Reveal key={image} delay={(i % 2) * 0.08} className={galleryLayout[i]}>
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  aria-label={`Open image ${i + 1} full screen`}
                  className="group block h-full w-full cursor-zoom-in overflow-hidden bg-beige"
                >
                  <img
                    src={image}
                    alt={`${project.name} — view ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.04]"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="shell">
          <div className="grid gap-8 border-t border-charcoal/10 pt-12 sm:grid-cols-2">
            <Link to={`/projects/${previous.slug}`} className="group">
              <span className="label text-charcoal/40">← Previous project</span>
              <p className="mt-4 font-display text-2xl font-light transition-transform duration-700 ease-editorial group-hover:translate-x-1 sm:text-3xl">
                {previous.name}
              </p>
            </Link>
            <Link to={`/projects/${next.slug}`} className="group sm:text-right">
              <span className="label text-charcoal/40">Next project →</span>
              <p className="mt-4 font-display text-2xl font-light transition-transform duration-700 ease-editorial group-hover:-translate-x-1 sm:text-3xl">
                {next.name}
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-charcoal/10 bg-off-white py-20 text-center lg:py-24">
        <div className="shell">
          <Reveal>
            <p className="label text-charcoal/45">Interested in a similar project?</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display mx-auto mt-6 max-w-2xl text-[clamp(1.75rem,4.4vw,3.25rem)] uppercase">
              Let&rsquo;s design the next one together.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              to="/contact"
              className="label mt-10 inline-block border border-charcoal/25 px-9 py-4 transition-all duration-500 ease-editorial hover:bg-charcoal hover:text-warm-white"
            >
              Start your project →
            </Link>
          </Reveal>
        </div>
      </section>

      <Lightbox
        images={project.gallery}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onNavigate={setLightbox}
      />
    </Page>
  );
}
