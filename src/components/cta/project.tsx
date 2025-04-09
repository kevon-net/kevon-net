import React from 'react';
import LayoutSection from '../layout/section';
import IntroSection from '../layout/intros/section';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@/data/constants';
import { Button, Group, Text, ThemeIcon, Title } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

export default function Project({
  props,
}: {
  props?: { title?: React.ReactNode };
}) {
  return (
    <LayoutSection
      id={'cta'}
      padded={SECTION_SPACING * 1.5}
      bg={'var(--mantine-color-gray-light)'}
      c={'var(--mantine-color-white)'}
    >
      <IntroSection
        props={{
          title: props?.title || (
            <Title
              order={2}
              ta={'center'}
              fz={{
                base: 'var(--mantine-h1-font-size)',
                md: '2.5rem',
                lg: '3rem',
              }}
            >
              Ready to bring your{' '}
              <Text component="span" inherit fw={'100'}>
                ideas to
              </Text>{' '}
              life?
              <br />
              I&apos;m{' '}
              <Text component="span" inherit fw={'100'}>
                here to help
              </Text>
            </Title>
          ),
        }}
      />

      <Group justify="center" mt={'xl'}>
        <Button
          size="xl"
          radius={'xl'}
          rightSection={
            <ThemeIcon size={ICON_WRAPPER_SIZE} variant="white" radius={'xl'}>
              <IconArrowRight
                size={ICON_SIZE}
                stroke={ICON_STROKE_WIDTH * 1.5}
              />
            </ThemeIcon>
          }
        >
          Contact Me
        </Button>
      </Group>
    </LayoutSection>
  );
}
