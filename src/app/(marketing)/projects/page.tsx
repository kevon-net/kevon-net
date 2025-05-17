import React from 'react';
import IntroPage from '@/components/layout/intros/page';
import LayoutPage from '@/components/layout/page';
import PartialProjectsList from '@/components/partials/page/project-list';
import ErrorMain from '@/components/partials/errors/main';
import { projectsGet } from '@/services/database/projects';
import { Text } from '@mantine/core';

export const revalidate = 3600;

export default async function Blog() {
  const { data: projects, error } = await projectsGet();

  if (error) {
    console.error(error);
    return <ErrorMain />;
  }

  if (projects == null) {
    console.error('Projects is null');
    return <ErrorMain />;
  }

  return (
    <LayoutPage>
      <IntroPage
        props={{
          title: 'Portfolio',
          desc: (
            <Text
              maw={{ xs: '66%', sm: '50%', md: '66%', lg: '50%', xl: '33%' }}
            >
              A selection of recent{' '}
              <Text component="span" inherit c={'pri'}>
                projects showcasing my work
              </Text>{' '}
              and problem-solving approach.
            </Text>
          ),
        }}
      />

      <PartialProjectsList projects={projects} />
    </LayoutPage>
  );
}
