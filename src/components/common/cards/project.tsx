'use client';

import React from 'react';
import {
  Anchor,
  Card,
  Group,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import ImageDefault from '../images/default';
import Link from 'next/link';
import { getRegionalDate } from '@/utilities/formatters/date';
import classes from './project.module.scss';
import { linkify } from '@/utilities/formatters/string';
import { ProjectGet } from '@/types/models/project';
import { useSupabaseQuery } from '@/hooks/fetch';
import ErrorMain from '@/components/partials/errors/main';
import { CategoryGet } from '@/types/models/category';

export default function Project({ project }: { project: ProjectGet }) {
  const link = `/projects/${linkify(project.title)}-${project.id}`;

  return (
    <Card
      padding={0}
      h={'100%'}
      bg={'transparent'}
      radius={0}
      className={classes.card}
    >
      <Stack>
        <Anchor
          component={Link}
          href={link}
          className={classes.imageWrapper}
          pos="relative"
        >
          <ImageDefault
            src={project.cover}
            alt={project.title}
            height={{ base: 280, xs: 360, sm: 480, md: 400, lg: 480, xl: 520 }}
            className={classes.image}
            width={'100%'}
            mode="grid"
          />

          {/* <Box className={classes.overlay} p={'md'}>
            <Flex
              gap={'xs'}
              direction={{ base: 'column', xs: 'row', xl: 'column' }}
              align={'end'}
              justify={'end'}
              h={'100%'}
            >
              {project.technologies.map((t, i) => (
                <Text
                  key={i}
                  inherit
                  fz={'sm'}
                  fw={500}
                  tt={'uppercase'}
                  lts={2}
                  ta={'end'}
                >
                  {t}
                </Text>
              ))}
            </Flex>
          </Box> */}
        </Anchor>

        <Stack mt={'xl'} gap={'lg'} align="start">
          <Group fz={'sm'} fw={500} tt={'uppercase'} lts={2}>
            <CategoryLink project={project} />
            <Text inherit>{getRegionalDate(project.created_at).date}</Text>
          </Group>

          <Anchor component={Link} href={link} pos="relative">
            <Title order={3}>{project.title}</Title>
          </Anchor>

          <Text lineClamp={3}>{project.desc}</Text>
        </Stack>
      </Stack>
    </Card>
  );
}

export function CategoryLink({
  project,
  height,
}: {
  project: ProjectGet;
  height?: number;
}) {
  const { data: categories, loading, error } = useSupabaseQuery('categories');

  if (error) {
    console.error(error);
    return <ErrorMain />;
  }

  if (categories == null && !loading) return null;

  const category = (categories as CategoryGet[] | undefined)?.find(
    (c) => c.id == project.category_id
  );

  return loading ? (
    <Skeleton h={height || 21.7} w={{ base: 120, xs: 160 }} />
  ) : (
    <Anchor
      component={Link}
      href={`/projects/categories/${category?.id}`}
      inherit
    >
      {category?.title}
    </Anchor>
  );
}
