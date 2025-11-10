'use client';

import {
  Anchor,
  Button,
  Card,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import React from 'react';
import ImageDefault from '../images/default';
import { getRegionalDate } from '@repo/utilities/date-time';
import classes from './post.module.scss';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@repo/constants/sizes';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import { linkify } from '@repo/utilities/url';
import { PostRelations } from '@repo/types/models/post';
import NextLink from '../anchor/next-link';

export default function Post({ props }: { props: PostRelations }) {
  const link = `/blog/${linkify(props.title)}-${props.id}`;

  return (
    <Card bg={'transparent'} padding={0} className={classes.card} radius={0}>
      <Stack>
        <NextLink href={link} className={classes.imageWrapper}>
          <ImageDefault
            src={props.image}
            alt={props.title}
            height={{ base: 280, xs: 360, sm: 480, md: 400, lg: 480, xl: 520 }}
            className={classes.image}
            width={'100%'}
            mode="grid"
          />
        </NextLink>

        <Stack mt={'xl'} gap={'lg'} align="start">
          <Group fz={'sm'} fw={500} tt={'uppercase'} lts={2}>
            <CategoryLink props={props} />

            <Text inherit fw={'normal'}>
              {getRegionalDate(props.created_at).date}
            </Text>
          </Group>

          <NextLink href={link}>
            <Title order={3}>{props.title}</Title>
          </NextLink>

          <Text lineClamp={3}>{props.excerpt}</Text>
        </Stack>

        <Group>
          <NextLink href={link}>
            <Button
              size="lg"
              variant="transparent"
              px={0}
              color="gray"
              radius={'xl'}
              rightSection={
                <ThemeIcon
                  size={ICON_WRAPPER_SIZE}
                  variant="light"
                  color="gray"
                  radius={'xl'}
                >
                  <IconArrowRight size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                </ThemeIcon>
              }
            >
              Read More
            </Button>
          </NextLink>
        </Group>
      </Stack>
    </Card>
  );
}

export function CategoryLink({ props }: { props: PostRelations }) {
  const category = props.category;

  return (
    <NextLink href={`/blog/categories/${category?.id}`} inherit>
      {category?.title}
    </NextLink>
  );
}
