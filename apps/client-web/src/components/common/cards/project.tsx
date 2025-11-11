'use client';

import React from 'react';
import { Card, Group, Stack, Text, Title } from '@mantine/core';
import ImageDefault from '@repo/components/common/images/default';
import { getRegionalDate } from '@repo/utilities/date-time';
import classes from './project.module.scss';
import { linkify } from '@repo/utilities/url';
import { ProjectRelations } from '@repo/types/models/project';
import { CategoryGet } from '@repo/types/models/category';
import { useStoreCategory } from '@/libraries/zustand/stores/category';
import NextLink from '@repo/components/common/anchor/next-link';

export default function Project({ project }: { project: ProjectRelations }) {
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
        <NextLink href={link} className={classes.imageWrapper} pos="relative">
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
        </NextLink>

        <Stack mt={'xl'} gap={'lg'} align="start">
          <Group fz={'sm'} fw={500} tt={'uppercase'} lts={2}>
            <CategoryLink project={project} />
            <Text inherit>{getRegionalDate(project.created_at).date}</Text>
          </Group>

          <NextLink href={link} pos="relative">
            <Title order={3}>{project.title}</Title>
          </NextLink>

          <Text lineClamp={3}>{project.desc}</Text>
        </Stack>
      </Stack>
    </Card>
  );
}

export function CategoryLink({ project }: { project: ProjectRelations }) {
  const { categories } = useStoreCategory();

  const category = (categories as CategoryGet[] | undefined)?.find(
    (c) => c.id == project.category_id
  );

  return (
    <NextLink href={`/projects/categories/${category?.id}`}>
      {category?.title}
    </NextLink>
  );
}
