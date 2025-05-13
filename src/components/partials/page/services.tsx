import React from 'react';
import LayoutSection from '@/components/layout/section';
import { SECTION_SPACING } from '@/data/constants';
import { Divider, Stack, Text, Title } from '@mantine/core';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';
import { services } from '@/data/services';
import IntroSection from '@/components/layout/intros/section';
import CardService from '@/components/common/cards/service';

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

      <LayoutSection
        id={'skills-image'}
        containerized={false}
        padded
        pr={'0.5rem'}
      >
        <ImageDefault
          src={images.card.light.potrait}
          height={{ base: 360, xs: 400, sm: 520, md: 480, lg: 560, xl: 600 }}
          width={'100%'}
          alt={'business card'}
          mode="wide"
          style={{
            borderTopRightRadius: 'var(--mantine-radius-sm)',
            borderBottomRightRadius: 'var(--mantine-radius-sm)',
          }}
        />
      </LayoutSection>

      <LayoutSection id={'skills-title'}>
        <Stack gap={SECTION_SPACING}>
          {services.map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && <Divider variant="dashed" />}

              <CardService props={s} />
            </React.Fragment>
          ))}
        </Stack>
      </LayoutSection>
    </LayoutSection>
  );
}
