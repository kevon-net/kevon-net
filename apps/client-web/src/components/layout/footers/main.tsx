import React from 'react';
import LayoutSection from '@repo/components/layout/section';
import { SECTION_SPACING } from '@repo/constants/sizes';
import { Anchor, Divider, Flex, Group, Stack, Text } from '@mantine/core';
import { links } from '@/data/links';
import NextLink from '@repo/components/common/anchor/next-link';
import { EMAILS, SOCIALS } from '@repo/constants/app';
import IndicatorTheme from '@repo/components/common/indicators/theme';

export default function Main() {
  return (
    <>
      <Divider />

      <LayoutSection id={'contact'} py={SECTION_SPACING}>
        <Stack ta={'center'} gap={SECTION_SPACING} c={'dimmed'} fz={'sm'}>
          <Flex
            direction={{ base: 'column', xs: 'row' }}
            justify={'center'}
            align={'center'}
            gap={'xl'}
          >
            {links.map((li) => (
              <Text
                key={li.label}
                component={'span'}
                inherit
                c={'dimmed'}
                fz={'md'}
              >
                {'</'}
                <NextLink href={li.link}>{li.label}</NextLink>
                {'>'}
              </Text>
            ))}
          </Flex>

          <Stack>
            <Group justify="center">
              <Text inherit visibleFrom="xs">
                Available for Full-time roles, Remote work, and Freelance
                projects.
              </Text>
            </Group>

            <Flex
              gap={{ base: 0, xs: 'md' }}
              direction={{ base: 'column', xs: 'row' }}
              justify={'center'}
            >
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
            </Flex>
          </Stack>

          <Stack>
            <Text inherit>
              &copy; {new Date().getFullYear()} Kevon. All rights reserved.
            </Text>

            <Group justify="center">
              <IndicatorTheme />
            </Group>
          </Stack>
        </Stack>
      </LayoutSection>
    </>
  );
}
