import React from 'react';
import LayoutSection from '@/components/layout/section';
import { SECTION_SPACING } from '@/data/constants';
import { Box, Divider, Grid, GridCol, Stack, Text, Title } from '@mantine/core';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';
import { services } from '@/data/services';
import IntroSection from '@/components/layout/intros/section';

export default function Services() {
  return (
    <LayoutSection
      id={'services'}
      padded={SECTION_SPACING}
      containerized={false}
    >
      <LayoutSection id={'skills-title'}>
        <IntroSection
          options={{ alignment: 'start' }}
          props={{
            title: (
              <Title order={2} fw={500} fz={'var(--mantine-h1-font-size)'}>
                Services
                {/* <Text component="span" inherit fw={'100'}>
                Kevon&apos;s
              </Text>{' '}
              History */}
              </Title>
            ),
            desc: (
              <Text
                maw={{ xs: '66%', sm: '50%', md: '66%', lg: '50%', xl: '33%' }}
              >
                An overview of the{' '}
                <Text component="span" inherit c={'pri'}>
                  development solutions
                </Text>{' '}
                I offer to help bring ideas to life.
              </Text>
            ),
          }}
        />
      </LayoutSection>

      <LayoutSection id={'skills-image'} containerized={false} padded>
        <Box style={{ overflow: 'hidden' }}>
          <ImageDefault
            src={images.card.light.potrait}
            height={{ base: 360, xs: 400, sm: 520, md: 480, lg: 560, xl: 600 }}
            width={'100%'}
            alt={'business card'}
            mode="wide"
          />
        </Box>
      </LayoutSection>

      <LayoutSection id={'skills-title'}>
        <Grid gutter={'xl'}>
          <GridCol span={{ base: 12 }} pl={{ lg: 'xl' }}>
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
    </LayoutSection>
  );
}
