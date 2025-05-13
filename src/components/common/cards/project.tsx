import React from 'react';
import { categories, portfolioProjects } from '@/data/projects';
import {
  Anchor,
  Box,
  Card,
  Flex,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import ImageDefault from '../images/default';
import Link from 'next/link';
import { getRegionalDate } from '@/utilities/formatters/date';
import classes from './project.module.scss';
import { linkify } from '@/utilities/formatters/string';

export default function Project({
  props,
}: {
  props: (typeof portfolioProjects)[0];
}) {
  const category =
    categories.find((c) => c.id == props.categoryId) || categories[0];

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
          href={`/projects/${linkify(props.name)}-${props.id}`}
          className={classes.imageWrapper}
          pos="relative"
        >
          <ImageDefault
            src={props.cover}
            alt={props.name}
            height={{ base: 240, xs: 320, sm: 400, lg: 480, xl: 280 }}
            width={'100%'}
            mode="wide"
            className={classes.image}
          />

          <Box className={classes.overlay} p={'md'}>
            <Flex
              gap={'xs'}
              direction={{ base: 'column', xs: 'row', xl: 'column' }}
              align={'end'}
              justify={'end'}
              h={'100%'}
            >
              {props.technologies.map((t, i) => (
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
          </Box>
        </Anchor>

        <Group fz={'sm'} fw={500} tt={'uppercase'} lts={2}>
          <Anchor
            component={Link}
            href={`/projects/categories/${category?.id}`}
            inherit
          >
            {category?.title}
          </Anchor>

          <Text inherit>{getRegionalDate(props.date).date}</Text>
        </Group>

        <Title order={3}>{props.name}</Title>
      </Stack>
    </Card>
  );
}
