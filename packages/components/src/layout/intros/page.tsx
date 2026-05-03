'use client';

/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import React from 'react';
import LayoutSection from '../section';
import { usePathname } from 'next/navigation';
import { Group, Stack, Text, Title } from '@mantine/core';
import { crumbify } from '@repo/utilities/url';
import GlitchMain from '../../wrappers/glitch/main';
import NextLink from '../../common/anchor/next-link';

interface PageHeaderProps {
  props: {
    /** If string, displayed as uppercase breadcrumb; if ReactNode, rendered directly */
    path?: string | React.ReactNode | null;
    title: string | React.ReactNode;
    desc?: string | React.ReactNode;
  };
  options?: {
    /** Controls vertical spacing style */
    spacing?: 'margin' | 'padding';
    alignment?: 'start' | 'center';
    glitch?: boolean;
    titleFontSize?: any;
  };
}

export default function Page({ props, options }: PageHeaderProps) {
  const pathname = usePathname();
  const segments = crumbify(pathname);

  const spacingProps = {
    padded: options?.spacing === 'padding' || undefined,
    margined: options?.spacing === 'margin' || true,
  };

  return (
    <LayoutSection id="layout-intro-page" {...spacingProps}>
      <Stack>
        {props.path == null ? null : !props.path ? (
          <Group
            justify={options?.alignment || 'start'}
            ta={options?.alignment || 'start'}
            fw={'bold'}
            tt={'uppercase'}
            fz={'xs'}
            lts={2}
          >
            {segments.map((s, i) => {
              const last = segments.indexOf(s) == segments.length - 1;

              return (
                <React.Fragment key={i}>
                  {segments.indexOf(s) > 0 && <Text component="span">/</Text>}

                  <NextLink
                    inherit
                    href={s.link}
                    onClick={(e) => {
                      if (last) return e.preventDefault();
                    }}
                    c={
                      last
                        ? 'var(--mantine-color-pri-6)'
                        : 'var(--mantine-color-text)'
                    }
                  >
                    {s.label}
                  </NextLink>
                </React.Fragment>
              );
            })}
          </Group>
        ) : typeof props.path == 'string' ? (
          <Text
            ta={options?.alignment || 'start'}
            fw={'bold'}
            c={'pri.6'}
            tt={'uppercase'}
            fz={'sm'}
          >
            {props.path}
          </Text>
        ) : (
          props.path
        )}

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
              <Title
                order={1}
                ta={options?.alignment || 'start'}
                fz={{ base: '1.5rem', xs: '2rem' }}
              >
                {props.title}
              </Title>
            )
          ) : (
            props.title
          )}

          {props.desc &&
            (typeof props.desc == 'string' ? (
              <Text
                ta={options?.alignment || 'start'}
                fz={options?.titleFontSize || 'md'}
                w={{ md: '75%', lg: '60%', xl: '50%' }}
              >
                {props.desc}
              </Text>
            ) : (
              props.desc
            ))}
        </Stack>
      </Stack>
    </LayoutSection>
  );
}
