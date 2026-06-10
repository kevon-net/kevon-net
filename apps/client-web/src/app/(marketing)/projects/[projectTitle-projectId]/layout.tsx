import React from 'react';
import LayoutBody from '@repo/components/layout/body';
import { typeParams } from '../layout';
import { Metadata } from 'next';
import { ProjectGet } from '@repo/types/models/project';
import { projectsGet } from '@repo/handlers/requests/database/projects';
import { extractUuidFromParam } from '@repo/utilities/url';
import { Status } from '@repo/types/models/enums';

const authorName = 'Kevon Kibochi';

export const generateMetadata = async ({
  params,
}: {
  params: typeParams;
}): Promise<Metadata> => {
  const paramValues = (await params)['projectTitle-projectId'];
  const projectId = extractUuidFromParam(paramValues);

  const { items: projects }: { items: ProjectGet[] } = await projectsGet();
  const project = (
    (projects || []).filter(
      (pi) => pi.status == Status.PUBLISHED
    ) as ProjectGet[]
  ).find((p) => p.id == projectId);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: project.title,
    description: project.description,
    authors: [{ name: authorName }],

    alternates: {
      canonical: `https://kevon.net/projects/${paramValues}`,
    },

    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      publishedTime: new Date(project.created_at).toISOString(),
      modifiedTime: new Date(project.updated_at).toISOString(),
      authors: [authorName], // or array of URLs/names
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} featured image`,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [project.image],
    },
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
