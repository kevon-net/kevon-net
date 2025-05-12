import React from 'react';
import LayoutSection from '@/components/layout/section';
import IntroSection from '@/components/layout/intros/section';
import { SECTION_SPACING } from '@/data/constants';
import { Grid, GridCol, Text, Title } from '@mantine/core';
import FormContact from '@/components/form/contact';
import IframeContact from '@/components/common/iframes/contact';

export default function Contact() {
  return (
    <>
      <LayoutSection id={'contact'} margined={SECTION_SPACING}>
        <IntroSection
          options={{ alignment: 'start', spacing: true }}
          props={{
            title: (
              <Title order={2} fw={500} fz={'var(--mantine-h1-font-size)'}>
                Contact
                {/* <Text component="span" inherit fw={'100'}>
                                        Kevon&apos;s
                                      </Text>{' '}
                                      History */}
              </Title>
            ),
            desc: 'I believe that collaboration and creativity are the cornerstones of progress, and I am dedicated to bringing a fresh perspective.',
          }}
        />

        <Grid>
          <GridCol span={{ base: 12, md: 4 }}>card 1</GridCol>
          <GridCol span={{ base: 12, md: 4 }}>card 2</GridCol>
          <GridCol span={{ base: 12, md: 4 }}>card 2</GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection id={'map'} h={400} containerized={false}>
        <IframeContact />
      </LayoutSection>

      <LayoutSection id={'contact-form'} margined={SECTION_SPACING}>
        <FormContact />
      </LayoutSection>
    </>
  );
}
