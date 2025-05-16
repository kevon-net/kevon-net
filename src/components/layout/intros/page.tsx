'use client';

import React from 'react';
import LayoutSection from '../section';
import { usePathname } from 'next/navigation';
import { Anchor, Group, Stack, Text, Title } from '@mantine/core';
import { crumbify } from '@/utilities/formatters/string';
import GlitchMain from '@/components/wrapper/glitch/main';
import Link from 'next/link';

export default function Page({
  props,
  options,
}: {
  props: {
    path?: string | React.ReactNode | null;
    title: string | React.ReactNode;
    desc?: string | React.ReactNode;
  };
  options?: {
    spacing?: 'margin' | 'padding';
    alignment?: 'start' | 'center';
    glitch?: boolean;
    titleFontSize?: any;
  };
}) {
  const pathname = usePathname();
  const segments = crumbify(pathname);

  return (
    <LayoutSection
      id={'layout-intro-page'}
      padded={options?.spacing == 'padding' || undefined}
      margined={options?.spacing == 'margin' || true}
    >
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

                  <Anchor
                    inherit
                    component={Link}
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
                  </Anchor>
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
                props={{ text: props.title }}
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
