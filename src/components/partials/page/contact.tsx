import React from 'react';
import LayoutSection from '@/components/layout/section';
import IntroSection from '@/components/layout/intros/section';
import { SECTION_SPACING } from '@/data/constants';
import { Anchor, Grid, GridCol, Stack, Text, Title } from '@mantine/core';
import FormContact from '@/components/form/contact';
import IframeContact from '@/components/common/iframes/contact';
import { contact } from '@/data/links';
import classes from './contact.module.scss';

export default function Contact() {
  return (
    <>
      <LayoutSection
        id={'contact'}
        padded={SECTION_SPACING}
        containerized={false}
      >
        <LayoutSection id={'contact-title'}>
          <IntroSection
            options={{ alignment: 'start' }}
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
              desc: (
                <Text
                  maw={{
                    xs: '66%',
                    sm: '50%',
                    md: '66%',
                    lg: '50%',
                    xl: '33%',
                  }}
                >
                  Let’s connect.{' '}
                  <Text component="span" inherit c={'pri'}>
                    Reach out
                  </Text>{' '}
                  to start a project, ask a question, or just say hello.
                </Text>
              ),
            }}
          />
        </LayoutSection>

        <LayoutSection id={'map'} containerized={false} padded>
          <IframeContact />
        </LayoutSection>

        <LayoutSection id={'contact-content'}>
          <Stack gap={SECTION_SPACING}>
            <Grid
              grow
              ta={{ xs: 'center', sm: 'start', md: 'center', lg: 'start' }}
            >
              <GridCol span={{ base: 12, xs: 6, sm: 4, md: 6, lg: 4 }}>
                <Stack>
                  <Title order={3}>Email</Title>

                  <Anchor href={contact[0].link} className={classes.linkLight}>
                    {contact[0].label}
                  </Anchor>
                </Stack>
              </GridCol>

              <GridCol span={{ base: 12, xs: 6, sm: 4, md: 6, lg: 4 }}>
                <Stack>
                  <Title order={3}>Address</Title>

                  <Anchor href={contact[1].link} className={classes.linkLight}>
                    {contact[1].label}
                  </Anchor>
                </Stack>
              </GridCol>

              <GridCol span={{ base: 12, xs: 6, sm: 4, md: 6, lg: 4 }}>
                <Stack>
                  <Title order={3}>Phone</Title>

                  <Anchor href={contact[2].link} className={classes.linkLight}>
                    {contact[2].label}
                  </Anchor>
                </Stack>
              </GridCol>
            </Grid>

            <FormContact />
          </Stack>
        </LayoutSection>
      </LayoutSection>
    </>
  );
}
