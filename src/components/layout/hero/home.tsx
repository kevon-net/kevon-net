import React from 'react';
import IntroPage from '@/components/layout/intros/page';
import { Button, Group, Text, ThemeIcon, Title } from '@mantine/core';
import LayoutSection from '@/components/layout/section';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import { FONT_SIZE, SECTION_SPACING } from '@/data/constants';

export default function Home() {
  return (
    <>
      <IntroPage
        props={{
          path: null,
          title: (
            <Title order={1} fz={FONT_SIZE.TITLE_PAGE}>
              Modern{' '}
              <Text component="span" inherit fw={'100'}>
                web solutions
              </Text>
              <br />
              one line of code{' '}
              <Text component="span" inherit fw={'100'}>
                at a time
              </Text>
            </Title>
          ),
          desc: (
            <Text
              w={{ base: '90%', xs: '75%', sm: '50%', lg: '33%' }}
              fz={'md'}
              c={'dimmed'}
              mt={'md'}
            >
              Welcome to my world of imagination and creativity. Let&apos;s turn
              bold ideas into real-world experiences.
            </Text>
          ),
        }}
        options={{ alignment: 'start' }}
      />

      <LayoutSection id={'cta-1'} pb={SECTION_SPACING * 2} bordered>
        <Group gap={'xs'}>
          <Button
            size="lg"
            radius={'xl'}
            component={Link}
            href={'/about'}
            rightSection={
              <ThemeIcon
                size={ICON_WRAPPER_SIZE}
                variant="white"
                radius={'xl'}
                visibleFrom="xs"
              >
                <IconArrowRight size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              </ThemeIcon>
            }
          >
            What I Do
          </Button>

          <Button
            size="lg"
            radius={'xl'}
            component={Link}
            href={'/projects'}
            color="gray"
            variant="transparent"
            rightSection={
              <ThemeIcon
                size={ICON_WRAPPER_SIZE}
                color="gray"
                variant="light"
                radius={'xl'}
              >
                <IconArrowRight size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              </ThemeIcon>
            }
          >
            View Works
          </Button>
        </Group>
      </LayoutSection>
    </>
  );
}
