'use client';

import React from 'react';
import ImageDefault from '@repo/components/common/images/default';
import { images } from '@repo/constants/images';
import { APP_NAME } from '@repo/constants/app';
import { Button, Divider, Group, Text } from '@mantine/core';
import LayoutSection from '@repo/components/layout/section';
import { usePathname } from 'next/navigation';
import { useWindowScroll } from '@mantine/hooks';
import NextLink from '@repo/components/common/anchor/next-link';
import { links } from '@/data/links';

export default function Main() {
  const pathname = usePathname();
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <LayoutSection id="navbar-main" py={{ base: '1.5rem' }}>
        <Group h="100%" justify="space-between">
          <div>
            <NextLink
              href={'/'}
              onClick={(e) => {
                if (pathname == '/') {
                  e.preventDefault();
                  if (scroll.y > 0) scrollTo({ y: 0 });
                }
              }}
            >
              <ImageDefault
                src={images.brand.icon.light}
                alt={APP_NAME.WEB}
                height={40}
                width={24}
                fit="contain"
              />
            </NextLink>
          </div>

          <Group gap={'xl'}>
            <Group>
              {links.map((li) => (
                <Text key={li.label} inherit>
                  [{' '}
                  <NextLink href={li.link} fz={'lg'}>
                    {li.label}
                  </NextLink>{' '}
                  ]
                </Text>
              ))}
            </Group>

            <Group>
              <NextLink href="/contact">
                <Button>Let&apos;s Talk</Button>
              </NextLink>
            </Group>
          </Group>
        </Group>
      </LayoutSection>

      <Divider />
    </>
  );
}
