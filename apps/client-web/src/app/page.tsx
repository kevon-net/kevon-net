/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { Divider } from '@mantine/core';
import LayoutPage from '@repo/components/layout/page';
import LayoutBody from '@repo/components/layout/body';
// import AffixNavbar from '@repo/components/common/affixi/navbar';
import LayoutHeroHome from '@/components/layout/heros/home';
import LayoutSection from '@repo/components/layout/section';
import PartialPageAbout from '@/components/partial/page/about';
import PartialPageServices from '@/components/partial/page/services';
import PartialPageSkills from '@/components/partial/page/skills';
import PartialPageExperience from '@/components/partial/page/experience';
// import PartialPageEducation from '@/components/partial/page/education';
// import PartialPagePortfolio from '@/components/partial/page/portfolio';
// import PartialPageQuotes from '@/components/partial/page/quotes';
import PartialPageBlog from '@/components/partial/page/blog';
import PartialPageContact from '@/components/partial/page/contact';

export default function Home() {
  return (
    <HomeLayout>
      <LayoutHeroHome />

      <LayoutSection id={'hero-about'}>
        <Divider />
      </LayoutSection>

      <PartialPageAbout />

      <LayoutSection id={'about-services'}>
        <Divider />
      </LayoutSection>

      <PartialPageServices />

      <LayoutSection id={'services-skills'}>
        <Divider />
      </LayoutSection>

      <PartialPageSkills />

      <LayoutSection id={'skills-experience'}>
        <Divider />
      </LayoutSection>

      <PartialPageExperience />

      {/* <LayoutSection id={'experience-education'}>
        <Divider />
      </LayoutSection> */}

      {/* <PartialPageEducation /> */}

      <LayoutSection id={'education-projects'}>
        <Divider />
      </LayoutSection>

      {/* <PartialPagePortfolio /> */}

      {/* <LayoutSection id={'projects-testimonials'}>
        <Divider />
      </LayoutSection> */}

      {/* <PartialPageQuotes /> */}

      <LayoutSection id={'testimonials-blog'}>
        <Divider />
      </LayoutSection>

      <PartialPageBlog />

      <LayoutSection id={'blog-contact'}>
        <Divider />
      </LayoutSection>

      <PartialPageContact />
    </HomeLayout>
  );
}

async function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutBody>
      <LayoutPage>
        <main>{children}</main>

        {/* <AffixNavbar /> */}
      </LayoutPage>
    </LayoutBody>
  );
}
