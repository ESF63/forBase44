import Page from '../components/Page.jsx';
import PageHero from '../components/PageHero.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { Reveal } from '../components/Reveal.jsx';
import CTA from '../sections/CTA.jsx';
import { projects, projectsHeader } from '../data/projects.js';

const layouts = [
  { className: 'sm:col-span-7', ratio: 'aspect-[4/3]' },
  { className: 'sm:col-span-5 sm:mt-20', ratio: 'aspect-[3/4]' },
  { className: 'sm:col-span-6', ratio: 'aspect-[16/11]' },
  { className: 'sm:col-span-6 sm:mt-16', ratio: 'aspect-[4/5]' },
  { className: 'sm:col-span-5', ratio: 'aspect-[4/5]' },
  { className: 'sm:col-span-7 sm:mt-16', ratio: 'aspect-[3/2]' },
];

export default function Projects() {
  return (
    <Page>
      <PageHero
        image={projectsHeader}
        eyebrow="Portfolio"
        title="Selected projects"
        intro="A collection of contemporary residences designed with purpose — each one shaped around a place, a climate and a way of living."
      />

      <section className="py-20 lg:py-28">
        <div className="shell">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-12">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 2) * 0.08} className={layouts[i].className}>
                <ProjectCard project={project} ratio={layouts[i].ratio} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </Page>
  );
}
