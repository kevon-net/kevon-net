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
import { blog, categories } from '@/data/blog';
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

export default function Post({ props }: { props: (typeof blog)[0] }) {
  const category = categories.find((c) => c.id == props.categoryId);
  const link = `/blog/${linkify(props.title)}-${props.id}`;

  return (
    <Card bg={'transparent'} padding={0} className={classes.card} radius={0}>
      <Stack>
        <Anchor component={Link} href={link} className={classes.imageWrapper}>
          <ImageDefault
            src={props.cover}
            height={{ base: 240 }}
            alt={props.title}
            className={classes.image}
          />
        </Anchor>

        <Stack mt={'xl'} gap={'lg'}>
          <Group fz={'sm'} fw={500} tt={'uppercase'} lts={2}>
            <Anchor
              component={Link}
              href={`/blog/categories/${category?.id}`}
              inherit
            >
              {category?.title}
            </Anchor>

            <Text inherit>{getRegionalDate(props.date).date}</Text>
          </Group>

          <Title order={3} w={{ lg: '80%' }}>
            {props.title}
          </Title>

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
