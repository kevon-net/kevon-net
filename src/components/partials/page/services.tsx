import React from 'react';
import LayoutSection from '@/components/layout/section';
import { SECTION_SPACING } from '@/data/constants';
import {
  Divider,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';
import { services } from '@/data/services';
import IntroSection from '@/components/layout/intros/section';

export default function Services() {
  return (
    <LayoutSection id={'services'} padded={SECTION_SPACING}>
      <IntroSection
        options={{ alignment: 'start', spacing: true }}
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
  );
}
