import { Link } from 'react-router-dom';

/** Editorial project card with zoom, overlay and reveal-on-hover details. */
export default function ProjectCard({ project, ratio = 'aspect-[4/3]', className = '' }) {
  return (
    <Link to={`/projects/${project.slug}`} className={`group block ${className}`}>
      <div className={`relative overflow-hidden bg-beige ${ratio}`}>
        <img
          src={project.cover}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 ease-editorial group-hover:bg-ink/40" />
        <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-700 ease-editorial group-hover:translate-y-0 group-hover:opacity-100 sm:p-8">
          <span className="label text-warm-white/85">
            View project{' '}
            <span className="inline-block transition-transform duration-500 ease-editorial group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-6 border-t border-charcoal/10 pt-5">
        <div>
          <h3 className="font-display text-2xl font-light leading-tight transition-opacity duration-500 sm:text-[28px]">
            {project.name}
          </h3>
          <p className="mt-1 text-xs tracking-wide text-charcoal/55">{project.location}</p>
        </div>
        <span className="label shrink-0 pt-1 text-charcoal/45">{project.year}</span>
      </div>
    </Link>
  );
}
