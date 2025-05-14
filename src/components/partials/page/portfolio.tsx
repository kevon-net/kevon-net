import React from 'react';
import LayoutSection from '@/components/layout/section';
import { SECTION_SPACING } from '@/data/constants';
import { Text, Title } from '@mantine/core';
import IntroSection from '@/components/layout/intros/section';
import CarouselPortfolio from '@/components/common/carousel/portfolio';

export default function Portfolio() {
  return (
    <LayoutSection id={'portfolio'} py={{ base: SECTION_SPACING * 2, md: SECTION_SPACING }}>
      <IntroSection
        options={{ alignment: 'start', spacing: true }}
        props={{
          title: (
            <Title order={2} fw={500} fz={'var(--mantine-h1-font-size)'}>
              Portfolio
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
              A selection of recent{' '}
              <Text component="span" inherit c={'pri'}>
                projects showcasing my work
              </Text>{' '}
              and problem-solving approach.
            </Text>
          ),
        }}
      />

      <CarouselPortfolio />
    </LayoutSection>
  );
}
