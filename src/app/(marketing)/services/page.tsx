import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@/components/layout/page';
import IntroPage from '@/components/layout/intros/page';
import {
  Divider,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import LayoutSection from '@/components/layout/section';
import { FONT_SIZE, SECTION_SPACING } from '@/data/constants';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';
import { services } from '@/data/services';
import CtaProject from '@/components/cta/project';

export const metadata: Metadata = { title: 'Services' };

export default async function Services() {
  return (
    <LayoutPage>
      <IntroPage
        props={{
          title: (
            <Title order={1} fz={FONT_SIZE.TITLE_PAGE}>
              This is{' '}
              <Text component="span" inherit fw={'100'}>
                what
              </Text>
              <br /> I do{' '}
              <Text component="span" inherit fw={'100'}>
                best
              </Text>
            </Title>
          ),
        }}
        options={{ alignment: 'start' }}
      />

      <LayoutSection
        id={'services'}
        mt={SECTION_SPACING * 1.5}
        pb={SECTION_SPACING * 1.5}
      >
        <Grid gutter={'xl'}>
          <GridCol span={{ base: 12, md: 5 }} visibleFrom="md">
            <Group
              pos={'sticky'}
              top={SECTION_SPACING}
              style={{ overflow: 'hidden' }}
            >
              <ImageDefault
                src={images.card.dark.potrait}
                height={{ md: 360, lg: 480 }}
                width={'100%'}
                alt={'business card'}
                mode="wide"
                style={{ transform: 'scale(1.33)' }}
              />
            </Group>
          </GridCol>

          <GridCol span={{ base: 12, md: 7 }} pl={{ lg: 'xl' }}>
            <Grid gutter={'xl'}>
              <GridCol span={{ base: 12, sm: 6 }}>
                <Stack gap={SECTION_SPACING} pt={{ sm: SECTION_SPACING }}>
                  {services.map(
                    (s, i) =>
                      i % 2 == 0 && (
                        <Stack key={i}>
                          <Stack w={{ lg: '80%' }}>
                            <Title order={2}>{s.title}</Title>
                            <Text>{s.desc}</Text>
                          </Stack>

                          <Stack mt={'md'}>
                            {s.subServices.map((ss, j) => (
                              <React.Fragment key={j}>
                                {s.subServices.indexOf(ss) > 0 && <Divider />}
                                <Text>{ss.title}</Text>
                              </React.Fragment>
                            ))}
                          </Stack>
                        </Stack>
                      )
                  )}
                </Stack>
              </GridCol>

              <GridCol span={{ base: 12, sm: 6 }}>
                <Stack
                  gap={SECTION_SPACING}
                  mt={{ base: SECTION_SPACING, sm: 0 }}
                >
                  {services.map(
                    (s, i) =>
                      i % 2 != 0 && (
                        <Stack key={i}>
                          <Stack w={{ lg: '80%' }}>
                            <Title order={2}>{s.title}</Title>
                            <Text>{s.desc}</Text>
                          </Stack>

                          <Stack mt={'md'}>
                            {s.subServices.map((ss, j) => (
                              <React.Fragment key={j}>
                                {s.subServices.indexOf(ss) > 0 && <Divider />}
                                <Text>{ss.title}</Text>
                              </React.Fragment>
                            ))}
                          </Stack>
                        </Stack>
                      )
                  )}
                </Stack>
              </GridCol>
            </Grid>
          </GridCol>
        </Grid>
      </LayoutSection>

      <CtaProject
        props={{
          title: (
            <Title
              order={2}
              ta={'center'}
              fz={{
                base: 'var(--mantine-h1-font-size)',
                md: '2.5rem',
                lg: '3rem',
              }}
            >
              Let’s make an{' '}
              <Text component="span" inherit fw={'100'}>
                impact
                <br />
              </Text>
              together. Ready{' '}
              <Text component="span" inherit fw={'100'}>
                when you are
              </Text>
            </Title>
          ),
        }}
      />
    </LayoutPage>
  );
}
