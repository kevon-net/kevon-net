/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { Divider } from '@mantine/core';
import LayoutPage from '@repo/components/layout/page';
import LayoutBody from '@repo/components/layout/body';
import AffixNavbar from '@repo/components/common/affixi/navbar';
import LayoutHeroHome from '@/components/layout/heros/home';
import PartialSectionContact from '@/components/partial/section/contact';
import PartialSectionTechnical from '@/components/partial/section/technical';
import PartialSectionAbout from '@/components/partial/section/about';
import PartialSectionProjects from '@/components/partial/section/projects';
// import PartialPageBlog from '@/components/partial/page/blog';
import NavbarMain from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footers/main';

export default function Home() {
  return (
    <HomeLayout>
      <LayoutHeroHome />

      <Divider />

      <PartialSectionProjects />

      <Divider />

      <PartialSectionTechnical />

      <Divider />

      <PartialSectionAbout />

      {/* <Divider /> */}

      {/* <PartialPageBlog /> */}

      <Divider />

      <PartialSectionContact />
    </HomeLayout>
  );
}

async function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutBody footer={<FooterMain />}>
      <LayoutPage>
        <main>{children}</main>

        <AffixNavbar>
          <NavbarMain />
        </AffixNavbar>
      </LayoutPage>
    </LayoutBody>
  );
}
