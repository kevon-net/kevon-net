import React from 'react';
import LayoutSection from '@repo/components/layout/section';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import {
  Box,
  Card,
  Divider,
  Flex,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import ImageDefault from '@repo/components/common/images/default';
import { images } from '@repo/constants/images';
import IntroSection from '@repo/components/layout/intros/section';
import CardAbout from '@/components/common/cards/about';
import { IconBrain } from '@tabler/icons-react';
import TimelineCv from '@/components/common/timelines/cv';
import { timeline } from '@/data/timeline';

export default function About() {
  return (
    <>
      <LayoutSection id={'about'} py={{ base: SECTION_SPACING * 2 }}>
        <IntroSection
          options={{ alignment: 'start', spacing: true }}
          props={{
            title: (
              <Title order={2} fw={500} fz={'var(--mantine-h1-font-size)'}>
                About
              </Title>
            ),
            desc: (
              <Text maw={{ xs: '66%', md: '50%' }}>
                I’m a full-stack developer specializing in building{' '}
                <Text component="span" inherit c={'pri'}>
                  scalable, high-performance web applications
                </Text>{' '}
                using Next.js, TypeScript, and PostgreSQL.
              </Text>
            ),
          }}
        />

        <Stack gap={SECTION_SPACING * 2}>
          <Grid gutter={'xl'}>
            <GridCol span={{ base: 12, md: 9 }}>
              <Stack
                gap={SECTION_SPACING}
                pos={'sticky'}
                top={SECTION_SPACING * 2}
                pr={{ md: 'xl' }}
              >
                <Stack>
                  <Text>
                    I focus on writing efficient, maintainable systems—from
                    optimizing Prisma transactions and structuring APIs to
                    improving frontend performance and reducing unnecessary
                    re-renders. I’m particularly interested in how systems scale
                    and behave under load, and I prioritize clean architecture
                    and predictable data flow.
                  </Text>

                  <Text>
                    Most of my work involves turning complex requirements into
                    well-structured, production-ready applications with a strong
                    emphasis on performance and reliability.
                  </Text>
                </Stack>

                <Card
                  padding={0}
                  bg={
                    'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-9))'
                  }
                  withBorder
                  fz={'sm'}
                  p={{ base: 'md', xs: 'xl' }}
                >
                  <Stack gap={'xl'}>
                    <Group>
                      <ThemeIcon
                        size={ICON_SIZE}
                        variant="transparent"
                        c={'pri'}
                      >
                        <IconBrain
                          size={ICON_SIZE}
                          stroke={ICON_STROKE_WIDTH}
                        />
                      </ThemeIcon>

                      <Title order={3} fz={'xl'}>
                        How I Approach Problems
                      </Title>
                    </Group>

                    <Stack gap={'lg'}>
                      <Text inherit>
                        A few principles I follow when building and optimizing
                        systems:
                      </Text>

                      <Stack gap={'xs'}>
                        {thought.map((ti) => (
                          <Group
                            key={ti}
                            gap={'xs'}
                            wrap="nowrap"
                            align="start"
                          >
                            <Text component="span" inherit c={'pri'}>
                              -{' '}
                            </Text>
                            <Text inherit>{ti}</Text>
                          </Group>
                        ))}
                      </Stack>
                    </Stack>
                  </Stack>
                </Card>
              </Stack>
            </GridCol>

            {/* <GridCol span={{ base: 12, md: 5 }}>
              <Box pl={{ lg: 'xl' }} mt={{ base: 'xl', md: 0 }}>
                <TimelineCv
                  props={{
                    list: timeline.work,
                    active: timeline.work.length - 3,
                  }}
                />
              </Box>
            </GridCol> */}
          </Grid>

          <Flex
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'stretch', md: 'center' }}
            justify={{ md: 'space-between' }}
            wrap="nowrap"
          >
            {stats.map((s, i) => (
              <React.Fragment key={i}>
                {stats.indexOf(s) > 0 && (
                  <Divider orientation="vertical" visibleFrom="md" />
                )}
                {stats.indexOf(s) > 0 && (
                  <Divider orientation="horizontal" hiddenFrom="md" my={'xl'} />
                )}

                <Stack
                  key={i}
                  ta={'center'}
                  align="center"
                  gap={'xs'}
                  w={{ md: `${100 / stats.length}%` }}
                >
                  <Text
                    inherit
                    component="span"
                    fz={{ base: '2rem', sm: '3rem' }}
                    fw={'bold'}
                    lh={1}
                  >
                    {s.value}
                  </Text>

                  <Text
                    inherit
                    fz={{ base: 'md', sm: 'xl', md: 'md', lg: 'xl' }}
                    maw={{ md: '80%' }}
                  >
                    {s.label}
                  </Text>
                </Stack>
              </React.Fragment>
            ))}
          </Flex>
        </Stack>
      </LayoutSection>
    </>
  );
}

const stats = [
  { value: '4 +', label: 'Years of Real World Experience' },
  { value: '20 +', label: 'Projects in Production' },
  { value: '5700 +', label: 'Hours Spent in IDE' },
];

const thought = [
  'Break systems down before writing code to avoid unnecessary complexity',
  'Optimize for performance early, not as an afterthought',
  'Prefer clear, maintainable solutions over clever abstractions',
  'Design with scalability and data consistency in mind',
  'Continuously refine and simplify existing implementations',
];
