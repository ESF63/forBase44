import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { projects } from '../data/projects.js';

/* Deliberately uneven: different widths, proportions and vertical offsets. */
const layouts = [
  { className: 'sm:col-span-7', ratio: 'aspect-[4/3]' },
  { className: 'sm:col-span-5 sm:mt-24', ratio: 'aspect-[3/4]' },
  { className: 'sm:col-span-5', ratio: 'aspect-[4/5]' },
  { className: 'sm:col-span-7 sm:mt-20', ratio: 'aspect-[16/10]' },
  { className: 'sm:col-span-6', ratio: 'aspect-[3/2]' },
  { className: 'sm:col-span-6 sm:mt-24', ratio: 'aspect-[4/5]' },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 lg:py-32">
      <div className="shell">
        <div className="flex flex-col gap-8 border-b border-charcoal/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label text-charcoal/45">02 — Portfolio</p>
            <h2 className="display mt-6 text-[clamp(2.25rem,5.6vw,4.75rem)] uppercase">
              Selected projects
            </h2>
          </div>
          <p className="max-w-xs text-sm font-light leading-relaxed text-charcoal/60">
            A collection of contemporary residences designed with purpose.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-12">
          {projects.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={(i % 2) * 0.08}
              className={layouts[i].className}
            >
              <ProjectCard project={project} ratio={layouts[i].ratio} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex justify-center lg:mt-20">
          <Link
            to="/projects"
            className="label border border-charcoal/20 px-8 py-4 transition-all duration-500 ease-editorial hover:bg-charcoal hover:text-warm-white"
          >
            View all projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
