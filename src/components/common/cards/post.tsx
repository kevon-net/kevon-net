'use client';

import {
  Anchor,
  Button,
  Card,
  Group,
  Skeleton,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import React from 'react';
import ImageDefault from '../images/default';
import { getRegionalDate } from '@/utilities/formatters/date';
import classes from './post.module.scss';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import { linkify } from '@/utilities/formatters/string';
import { PostGet } from '@/types/models/post';
import { useSupabaseQuery } from '@/hooks/fetch';
import { CategoryGet } from '@/types/models/category';
import ErrorMain from '@/components/partials/errors/main';

export default function Post({ props }: { props: PostGet }) {
  const link = `/blog/${linkify(props.title)}-${props.id}`;

  return (
    <Card bg={'transparent'} padding={0} className={classes.card} radius={0}>
      <Stack>
        <Anchor component={Link} href={link} className={classes.imageWrapper}>
          <ImageDefault
            src={props.cover}
            alt={props.title}
            height={{ base: 280, xs: 360, sm: 480, md: 400, lg: 480, xl: 520 }}
            className={classes.image}
            width={'100%'}
            mode="grid"
          />
        </Anchor>

        <Stack mt={'xl'} gap={'lg'} align="start">
          <Group fz={'sm'} fw={500} tt={'uppercase'} lts={2}>
            <CategoryLink props={props} />

            <Text inherit fw={'normal'}>
              {getRegionalDate(props.created_at).date}
            </Text>
          </Group>

          <Anchor component={Link} href={link}>
            <Title order={3}>{props.title}</Title>
          </Anchor>

          <Text lineClamp={3}>{props.excerpt}</Text>
        </Stack>

        <Group>
          <Button
            size="lg"
            variant="transparent"
            px={0}
            color="gray"
            radius={'xl'}
            component={Link}
            href={link}
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
        </Group>
      </Stack>
    </Card>
  );
}

export function CategoryLink({ props }: { props: PostGet }) {
  const { data: categories, loading, error } = useSupabaseQuery('categories');

  if (error) {
    console.error(error);
    return <ErrorMain />;
  }

  if (categories == null && !loading) return null;

  const category = (categories as CategoryGet[] | undefined)?.find(
    (c) => c.id == props.category_id
  );

  return loading ? (
    <Skeleton h={21.7} w={{ base: 120, xs: 160 }} />
  ) : (
    <Anchor component={Link} href={`/blog/categories/${category?.id}`} inherit>
      {category?.title}
    </Anchor>
  );
}
