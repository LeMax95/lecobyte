import type { Metadata } from 'next';

import Hero from '@/components/blocks/Hero';
import About from '@/components/blocks/About';
import Logos from '@/components/blocks/Logos';
import VisualArchive from '@/components/blocks/VisualArchive';
import Impact from '@/components/blocks/Impact';
import Arsenal from '@/components/blocks/Arsenal';
import Services from '@/components/blocks/Services';
import IndustryFocus from '@/components/blocks/IndustryFocus';
import Studio from '@/components/blocks/Studio';
import ProjectGrid from '@/components/blocks/ProjectGrid';
import TechStack from '@/components/blocks/TechStack';
import Process from '@/components/blocks/Process';
import Testimonials from '@/components/blocks/Testimonials';
import LatestIntel from '@/components/blocks/LatestIntel';
import FAQ from '@/components/blocks/FAQ';
import Contact from '@/components/blocks/Contact';
import SmoothScroll from '@/components/SmoothScroll';

import { getAllProjects } from '@/lib/projects';
import { getAllIntel } from '@/lib/intel';
import { getHomePage } from '@/lib/home';
import { getSiteConfig } from '@/lib/site';

import { resolveHomeSeo, resolveSiteSeo, toNextMetadata, RenderJsonLd } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const [siteSeo, pageSeo] = await Promise.all([
    resolveSiteSeo(),
    resolveHomeSeo(),
  ]);

  return toNextMetadata(siteSeo.site, pageSeo);
}

export default async function Home() {
  const [projects, intelPosts, home, site, seo] = await Promise.all([
    getAllProjects(),
    getAllIntel(),
    getHomePage(),
    getSiteConfig(),
    resolveHomeSeo(),
  ]);

  return (
    <SmoothScroll>
      <>
        {seo.schema?.map((item, index) => (
          <RenderJsonLd
            key={`home-jsonld-${index}`}
            data={item}
          />
        ))}

        <main className="flex flex-col bg-white">
          <Hero content={home.hero} availabilityLabel={site.availabilityLabel} />
          <About content={home.about} />
          <Logos logos={home.logos} />

          <VisualArchive archive={home.visualArchive} />
          <Impact content={home.impact} />

          <Arsenal tools={home.arsenal} />
          <Services services={home.services} />
          <IndustryFocus industries={home.industryFocus} />

          <Studio content={home.studio} />

          <div className="bg-surface border-y border-border">
            <ProjectGrid projects={projects} />
          </div>
          <TechStack stack={home.techStack} />
          <Process steps={home.process} />

          <div className="bg-surface border-y border-border">
            <Testimonials reviews={home.testimonials} />
          </div>
          <LatestIntel posts={intelPosts} />
          <FAQ faqs={home.faqs} />

          <Contact content={home.contact} directLinks={site.directLinks} />
        </main>
      </>
    </SmoothScroll>
  );
}