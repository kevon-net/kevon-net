import React from 'react';
import LayoutPage from '@repo/components/layout/page';
import PartialPageProject from '@/components/partial/page/project';
import { typeParams } from '../layout';
import { extractUuidFromParam, linkify } from '@repo/utilities/url';
import { ProjectGet } from '@repo/types/models/project';
import { projectsGet } from '@repo/handlers/requests/database/projects';
import { Status } from '@repo/types/models/enums';
// import { sampleProjects as projects } from '@/data/sample/projects';

export const revalidate = 3600; // Revalidate at most every hour (in seconds)

export async function generateStaticParams() {
  const { items: projects }: { items: ProjectGet[] } = await projectsGet();

  return projects
    .filter((pi) => pi.status == Status.PUBLISHED)
    .map((project) => ({
      'projectTitle-projectId': `${linkify(project.title)}-${project.id}`,
    }));
}

export default async function Project({
  params,
}: {
  params: Promise<typeParams>;
}) {
  const projectId = extractUuidFromParam(
    (await params)['projectTitle-projectId']
  );

  if (!projectId) return null;

  return (
    <LayoutPage>
      <PartialPageProject props={{ projectId }} />
    </LayoutPage>
  );
}
