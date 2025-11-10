import React from 'react';
import { Button, Group, Text, ThemeIcon, Title } from '@mantine/core';
import IntroPage from '@repo/components/layout/intros/page';
import LayoutSection from '@repo/components/layout/section';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  FONT_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import NextLink from '@repo/components/common/anchor/next-link';

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
              c={'var(--mantine-color-dark-0)'}
              mt={'md'}
            >
              Welcome to my world of imagination and creativity. Let&apos;s turn
              bold ideas into real-world experiences.
            </Text>
          ),
        }}
        options={{ alignment: 'start' }}
      />

      <LayoutSection id={'cta-1'} pb={SECTION_SPACING * 2}>
        <Group gap={'xs'}>
          <NextLink href={'#about'}>
            <Button
              size="lg"
              radius={'xl'}
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
          </NextLink>

          {/* <NextLink href={'/projects'}>
            <Button
              size="lg"
              radius={'xl'}
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
          </NextLink> */}
        </Group>
      </LayoutSection>
    </>
  );
}
