import React from 'react';
import LayoutSection from '@repo/components/layout/section';
import { SECTION_SPACING } from '@repo/constants/sizes';
import { Anchor, Divider, Group, Stack, Text } from '@mantine/core';
import { links } from '@/data/links';
import NextLink from '@repo/components/common/anchor/next-link';
import { EMAILS, SOCIALS } from '@repo/constants/app';
import IndicatorTheme from '@repo/components/common/indicators/theme';

export default function Main() {
  return (
    <>
      <Divider />

      <LayoutSection id={'contact'} py={SECTION_SPACING}>
        <Stack align="center" ta={'center'} gap={SECTION_SPACING}>
          <Group gap={'xl'}>
            {links.map((li) => (
              <Text key={li.label} component={'span'} inherit c={'dimmed'}>
                {'</'}
                <NextLink href={li.link}>{li.label}</NextLink>
                {'>'}
              </Text>
            ))}
          </Group>

          <Stack c={'dimmed'} fz={'sm'} align="center">
            <Group>
              <Anchor inherit href={SOCIALS.GH.LINK} target="_blank">
                {SOCIALS.GH.LABEL}
              </Anchor>
              <span>·</span>
              <Anchor inherit href={SOCIALS.LI.LINK} target="_blank">
                {SOCIALS.LI.LABEL}
              </Anchor>
              <span>·</span>
              <Anchor inherit href={`mailto:${EMAILS.CONTACT}`}>
                {EMAILS.CONTACT}
              </Anchor>
            </Group>

            <Text inherit>
              Available for Full-time roles, Remote work, and Freelance
              projects.
            </Text>

            <Text inherit>
              &copy; {new Date().getFullYear()} Kevon. All rights reserved.
            </Text>

            <IndicatorTheme />
          </Stack>
        </Stack>
      </LayoutSection>
    </>
  );
}
