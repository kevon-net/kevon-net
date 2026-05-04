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
import { PostGet } from '@repo/types/models/post';
import NextLink from '../anchor/next-link';
import { useStoreCategory } from '@repo/libraries/zustand/stores/category';

export default function Post({ props }: { props: PostGet }) {
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
          <Group fz={'sm'} tt={'uppercase'} lts={2}>
            <CategoryLink props={props} />

            <Text inherit fw={'normal'}>
              {getRegionalDate(props.created_at).date}
            </Text>
          </Group>

          <NextLink href={link}>
            <Title order={3} lineClamp={2} mih={61.6}>
              {props.title}
            </Title>
          </NextLink>

          <Text lineClamp={4} mih={99.2}>
            {props.excerpt}
          </Text>
        </Stack>

        <Group>
          <NextLink href={link}>
            <Button
              variant="transparent"
              px={0}
              c="dimmed"
              rightSection={
                <IconArrowRight size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
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

export function CategoryLink({ props }: { props: PostGet }) {
  const { categories } = useStoreCategory();
  const category = (categories || []).find((ci) => ci.id == props.category_id);

  return (
    <NextLink
      onClick={(e) => e.preventDefault()}
      href="#"
      // href={`/blog/categories/${category?.id}`}
      inherit
      fw={500}
    >
      {category?.title}
    </NextLink>
  );
}
