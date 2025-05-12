import React from 'react';
import LayoutSection from '@/components/layout/section';
import { SECTION_SPACING } from '@/data/constants';
import {
  Divider,
  Grid,
  GridCol,
  Group,
  Progress,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import TimelineCv from '@/components/common/timelines/cv';
import IntroSection from '@/components/layout/intros/section';
import ImageDefault from '@/components/common/images/default';
import { timeline } from '@/data/timeline';
import { images } from '@/assets/images';

export default function Skills() {
  return (
    <>
      <LayoutSection id={'experience'} margined={SECTION_SPACING}>
        <IntroSection
          options={{ alignment: 'start', spacing: true }}
          props={{
            title: (
              <Title order={2} fw={500} fz={'var(--mantine-h1-font-size)'}>
                Experience
                {/* <Text component="span" inherit fw={'100'}>
                    Kevon&apos;s
                  </Text>{' '}
                  History */}
              </Title>
            ),
          }}
        />

        <Grid gutter={'xl'}>
          <GridCol span={{ base: 12, md: 5 }} visibleFrom="md">
            <Group
              pos={'sticky'}
              top={SECTION_SPACING}
              style={{ overflow: 'hidden' }}
            >
              <ImageDefault
                src={images.cv.light}
                height={{ md: 360, lg: 480 }}
                width={'100%'}
                alt={'business card'}
                mode="wide"
                style={{ transform: 'scale(1.25)' }}
              />
            </Group>
          </GridCol>

          <GridCol span={{ base: 12, md: 7 }} pl={{ lg: 'xl' }}>
            <Grid>
              <GridCol span={{ base: 12, md: 12 }}>
                <TimelineCv
                  props={{
                    list: timeline.education,
                    active: timeline.education.length - 3,
                  }}
                />
              </GridCol>

              <GridCol span={{ base: 12, md: 12 }}>
                <Divider my={SECTION_SPACING / 1.5} />
              </GridCol>

              <GridCol span={{ base: 12, md: 12 }}>
                <TimelineCv
                  props={{
                    list: timeline.work,
                    active: timeline.work.length - 3,
                  }}
                />
              </GridCol>
            </Grid>
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection id={'skills'} margined={SECTION_SPACING}>
        <IntroSection
          options={{ alignment: 'start', spacing: true }}
          props={{
            title: (
              <Title order={2} fw={500} fz={'var(--mantine-h1-font-size)'}>
                Skills
                {/* <Text component="span" inherit fw={'100'}>
                    Kevon&apos;s
                  </Text>{' '}
                  Tech Stack */}
              </Title>
            ),
          }}
        />

        <Grid gutter={'xl'}>
          {skills.design.map((d, i) => (
            <GridCol key={i} span={{ base: 12, xs: 6, md: 4, lg: 3 }}>
              <Stack gap={'xs'}>
                <Group justify="space-between">
                  <Text>{d.title}</Text>
                  <Text>{d.value}%</Text>
                </Group>

                <Progress
                  radius={0}
                  size={'xs'}
                  value={d.value}
                  styles={{
                    root: {
                      backgroundColor: 'var(--mantine-color-gray-light)',
                    },
                  }}
                />
              </Stack>
            </GridCol>
          ))}

          <GridCol span={12}>
            <Divider my={'xl'} variant="dashed" />
          </GridCol>

          {skills.languages.map((s, i) => (
            <GridCol key={i} span={{ base: 12, xs: 6, md: 4, lg: 3 }}>
              <Stack gap={'xs'}>
                <Group justify="space-between">
                  <Text>{s.title}</Text>
                  <Text>{s.value}%</Text>
                </Group>

                <Progress
                  radius={0}
                  size={'xs'}
                  value={s.value}
                  styles={{
                    root: {
                      backgroundColor: 'var(--mantine-color-gray-light)',
                    },
                  }}
                />
              </Stack>
            </GridCol>
          ))}

          {skills.technologies.map((s, i) => (
            <GridCol key={i} span={{ base: 12, xs: 6, md: 4, lg: 3 }}>
              <Stack gap={'xs'}>
                <Group justify="space-between">
                  <Text>{s.title}</Text>
                  <Text>{s.value}%</Text>
                </Group>

                <Progress
                  radius={0}
                  size={'xs'}
                  value={s.value}
                  styles={{
                    root: {
                      backgroundColor: 'var(--mantine-color-gray-light)',
                    },
                  }}
                />
              </Stack>
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>
    </>
  );
}

const skills = {
  design: [
    {
      title: 'UI / UX Design',
      value: 90,
    },
    {
      title: 'Responsive Design',
      value: 88,
    },
    {
      title: 'Wireframing / Prototyping',
      value: 86,
    },

    {
      title: 'Branding / Identity Design',
      value: 85,
    },
    {
      title: '3D Modeling / Mockups',
      value: 84,
    },
    {
      title: 'Illustration',
      value: 83,
    },
    {
      title: 'User Research / Testing',
      value: 80,
    },
    {
      title: 'Adobe Illustrator',
      value: 88,
    },
    {
      title: 'Adobe Photoshop',
      value: 80,
    },
    {
      title: 'Adobe InDesign',
      value: 86,
    },
    {
      title: 'Figma',
      value: 79,
    },
    {
      title: 'Canva',
      value: 77,
    },
  ],
  languages: [
    {
      title: 'HTML',
      value: 90,
    },
    {
      title: 'CSS / SCSS',
      value: 88,
    },
    {
      title: 'JavaScript / TypeScript',
      value: 85,
    },
    {
      title: 'React',
      value: 88,
    },
    {
      title: 'SQL',
      value: 77,
    },
  ],
  technologies: [
    {
      title: 'Node.js',
      value: 87,
    },
    {
      title: 'Vite',
      value: 90,
    },
    {
      title: 'Next.js',
      value: 85,
    },
    {
      title: 'PostgreSQL',
      value: 80,
    },
    {
      title: 'Prisma',
      value: 72,
    },
    {
      title: 'TurboPack',
      value: 68,
    },
    {
      title: 'Supabase',
      value: 80,
    },
  ],
};
