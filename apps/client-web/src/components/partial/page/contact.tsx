import React from 'react';
import LayoutSection from '@repo/components/layout/section';
import { SECTION_SPACING } from '@repo/constants/sizes';
import { Text, Title } from '@mantine/core';
import IntroSection from '@repo/components/layout/intros/section';
import PartialContact from '../contact';

export default function Contact() {
  return (
    <LayoutSection id={'contact'} py={{ base: SECTION_SPACING * 2 }}>
      <IntroSection
        options={{ alignment: 'start', spacing: true }}
        props={{
          title: (
            <Title order={2} fw={500} fz={'var(--mantine-h1-font-size)'}>
              Get in Touch
            </Title>
          ),
          desc: (
            <Text maw={{ xs: '66%', sm: '50%', md: '66%', lg: '50%' }}>
              Open to{' '}
              <Text component="span" inherit c={'pri'}>
                Full-time roles, Remote work, and Freelance projects
              </Text>
              .
            </Text>
          ),
        }}
      />

      <PartialContact />
    </LayoutSection>
  );
}
