import { Reveal } from './Reveal.jsx';

/** Full-bleed image header used at the top of every inner page. */
export default function PageHero({ image, eyebrow, title, intro, tall = false }) {
  return (
    <section
      className={[
        'relative flex items-end overflow-hidden bg-ink',
        tall ? 'h-[86svh] min-h-[560px]' : 'h-[62svh] min-h-[440px]',
      ].join(' ')}
    >
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/35 to-ink/80" />

      <div className="shell relative z-10 pb-16 text-warm-white sm:pb-24">
        <Reveal>
          <p className="label text-mist">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display mt-6 max-w-4xl text-[clamp(2.25rem,6.4vw,5.5rem)] uppercase">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-xl text-sm font-light leading-relaxed text-warm-white/70">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
