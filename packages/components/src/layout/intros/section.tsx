'use client';

/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import LayoutSection from '../section';
import { Stack, Text, Title } from '@mantine/core';
import { SECTION_SPACING } from '@repo/constants/sizes';
import GlitchMain from '../../wrappers/glitch/main';

interface SectionHeaderProps {
  props: {
    subTitle?: string;
    title: string | React.ReactNode;
    desc?: string | React.ReactNode;
  };
  options?: {
    alignment?: 'start' | 'end' | 'center';
    spacing?: boolean;
    glitch?: boolean;
    titleFontSize?: any;
  };
}

export default function Section({ props, options }: SectionHeaderProps) {
  const alignment = options?.alignment ?? 'center';

  return (
    <LayoutSection id="layout-intro-section" containerized={false}>
      <Stack>
        {props.subTitle && (
          <Text fw="bold" ta={alignment} c="pri.6" tt="uppercase" fz="sm">
            {props.subTitle}
          </Text>
        )}

        <LayoutSection
          id="layout-intro-section-desc"
          px={0}
          containerized={options?.alignment ? false : 'sm'}
          mb={options?.spacing ? SECTION_SPACING : undefined}
        >
          <Stack>
            {typeof props.title == 'string' ? (
              options?.glitch ? (
                <GlitchMain
                  text={props.title}
                  ta={options?.alignment || 'start'}
                  fw={'bold'}
                  fz={{ base: '1.5rem', xs: '2rem' }}
                />
              ) : (
                <Title order={2} ta={options?.alignment || 'center'}>
                  {props.title}
                </Title>
              )
            ) : (
              props.title
            )}

            {props.desc &&
              (typeof props.desc == 'string' ? (
                <Text ta={options?.alignment || 'center'}>{props.desc}</Text>
              ) : (
                props.desc
              ))}
          </Stack>
        </LayoutSection>
      </Stack>
    </LayoutSection>
  );
}
