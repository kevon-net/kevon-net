import React from 'react';
import LayoutBody from '@repo/components/layout/body';
import { typeParams } from '../layout';
import { Metadata } from 'next';
import { ProjectGet } from '@repo/types/models/project';
import { projectsGet } from '@repo/handlers/requests/database/projects';
import { extractUuidFromParam } from '@repo/utilities/url';

export const generateMetadata = async ({
  params,
}: {
  params: typeParams;
}): Promise<Metadata> => {
  const projectId = extractUuidFromParam(
    (await params)['projectTitle-projectId']
  );

  const { items: projects }: { items: ProjectGet[] } = await projectsGet();
  const project = ((projects || []) as ProjectGet[]).find(
    (p) => p.id == projectId
  );

  return {
    title: project?.title || '',
    description: project?.description || '',
  };
};

export default function LayoutProject({
  children, // will be a page or nested layout
  // params,
}: {
  children: React.ReactNode;
  params: typeParams;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
