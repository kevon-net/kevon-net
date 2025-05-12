import React from 'react';
import LayoutPage from '@/components/layout/page';
import NavbarMain from '@/components/layout/navbars/main';

import PartialPageAbout from '@/components/partials/page/about';
import PartialPageServices from '@/components/partials/page/services';
import PartialPageSkills from '@/components/partials/page/skills';
import PartialPagePortfolio from '@/components/partials/page/portfolio';
import PartialPageQuotes from '@/components/partials/page/quotes';
import PartialPageBlog from '@/components/partials/page/blog';
import PartialPageContact from '@/components/partials/page/contact';
import LayoutHeroHome from '@/components/layout/hero/home';

export default function Home() {
  return (
    <LayoutPage>
      <NavbarMain />

      <LayoutHeroHome />

      {/* about */}
      <PartialPageAbout />

      {/* services */}
      <PartialPageServices />

      {/* skills */}
      <PartialPageSkills />

      {/* projects */}
      <PartialPagePortfolio />

      {/* testimonials */}
      <PartialPageQuotes />

      {/* blog */}
      <PartialPageBlog />

      {/* contact */}
      <PartialPageContact />
    </LayoutPage>
  );
}
