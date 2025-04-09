import React from 'react';
import LayoutBody from '@/components/layout/body';
import { typeParams } from '../layout';
// import { Metadata } from 'next';
// import { extractUuidFromParam } from '@/utilities/helpers/string';

// export const generateMetadata = async ({
//   params,
// }: {
//   params: typeParams;
// }): Promise<Metadata> => {
//   const projectId = extractUuidFromParam(params['projectTitle-projectId']);

//   const { projects }: { projects: projectRelations[] } = await projectsGet();

//   const project = projects.find((p) => p.id == projectId);

//   return {
//     title: project?.title,
//     description: project?.excerpt,
//     category: project?.category?.title,
//   };
// };

export default function LayoutProject({
  children, // will be a page or nested layout
  // params,
}: {
  children: React.ReactNode;
  params: typeParams;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
