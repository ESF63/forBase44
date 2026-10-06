import Page from '../components/Page.jsx';
import Hero from '../sections/Hero.jsx';
import Philosophy from '../sections/Philosophy.jsx';
import FeaturedProjects from '../sections/FeaturedProjects.jsx';
import Approach from '../sections/Approach.jsx';
import Cinematic from '../sections/Cinematic.jsx';
import Services from '../sections/Services.jsx';
import Stats from '../sections/Stats.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import Journal from '../sections/Journal.jsx';
import CTA from '../sections/CTA.jsx';

export default function Home() {
  return (
    <Page>
      <Hero />
      <Philosophy />
      <FeaturedProjects />
      <Approach />
      <Cinematic />
      <Services />
      <Stats />
      <Testimonials />
      <Journal />
      <CTA />
    </Page>
  );
}
