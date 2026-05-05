import React from 'react';
import LayoutPage from '@repo/components/layout/page';
import PartialPageProjects from '@/components/partial/page/projects';

export default async function Projects() {
  return (
    <LayoutPage>
      <PartialPageProjects />
    </LayoutPage>
  );
}
