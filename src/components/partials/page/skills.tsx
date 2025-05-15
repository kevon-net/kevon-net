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
import IntroSection from '@/components/layout/intros/section';

export default function Skills() {
  return (
    <LayoutSection
      id={'skills'}
      py={{ base: SECTION_SPACING * 2, md: SECTION_SPACING }}
      containerized={false}
    >
      <LayoutSection id={'skills-title'}>
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
            desc: (
              <Text
                maw={{ xs: '66%', sm: '50%', md: '66%', lg: '50%', xl: '33%' }}
              >
                A snapshot of the{' '}
                <Text component="span" inherit c={'pri'}>
                  tools, technologies, and techniques
                </Text>{' '}
                I work with daily.
              </Text>
            ),
          }}
        />
      </LayoutSection>

      <LayoutSection id={'skills-content'}>
        <Grid gutter={'xl'}>
          {skills.design.map((d, i) => (
            <GridCol key={i} span={{ base: 12, xs: 6, lg: 4 }}>
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
            <GridCol key={i} span={{ base: 12, xs: 6, lg: 4 }}>
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
            <GridCol key={i} span={{ base: 12, xs: 6, lg: 4 }}>
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
    </LayoutSection>
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
