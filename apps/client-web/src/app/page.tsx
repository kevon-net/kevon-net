/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { Stack } from '@mantine/core';
import LayoutPage from '@repo/components/layout/page';
import LayoutBody from '@repo/components/layout/body';
import AffixNavbar from '@repo/components/common/affixi/navbar';

export default function Home() {
  return (
    <HomeLayout>
      <LayoutPage>
        <Stack py={'xl'} align="center" justify={'center'} h={'100vh'}>
          <p>
            Get started by editing <code>src/app/page.tsx</code>.
          </p>

          <p>Save and see your changes instantly.</p>
        </Stack>
      </LayoutPage>
    </HomeLayout>
  );
}

async function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutBody>
      <main>{children}</main>

      <AffixNavbar />
    </LayoutBody>
  );
}
