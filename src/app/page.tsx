import React from 'react';
import LayoutPage from '@/components/layout/page';

import PartialPageAbout from '@/components/partials/page/about';
import PartialPageServices from '@/components/partials/page/services';
import PartialPageSkills from '@/components/partials/page/skills';
import PartialPageExperience from '@/components/partials/page/experience';
// import PartialPageEducation from '@/components/partials/page/education';
// import PartialPagePortfolio from '@/components/partials/page/portfolio';
// import PartialPageQuotes from '@/components/partials/page/quotes';
import PartialPageBlog from '@/components/partials/page/blog';
import PartialPageContact from '@/components/partials/page/contact';
import LayoutHeroHome from '@/components/layout/heros/home';
import LayoutSection from '@/components/layout/section';
import { Divider } from '@mantine/core';

export const revalidate = 3600;

export default function Home() {
  return (
    <LayoutPage>
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
    </LayoutPage>
  );
}
