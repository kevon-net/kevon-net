'use client';

import React from 'react';
import ImageDefault from '@repo/components/common/images/default';
import { images } from '@repo/constants/images';
import { APP_NAME } from '@repo/constants/app';
import {
  ActionIcon,
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  NavLink,
  Stack,
  Text,
} from '@mantine/core';
import LayoutSection from '@repo/components/layout/section';
import { usePathname } from 'next/navigation';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import NextLink from '@repo/components/common/anchor/next-link';
import { links } from '@/data/links';
import { IconX } from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@repo/constants/sizes';
import Link from 'next/link';

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

          <Group gap={'xl'} visibleFrom="md">
            <Group>
              {links.map((li) => (
                <Text key={li.label} inherit>
                  {'</'}
                  <NextLink href={li.link} fz={'lg'}>
                    {li.label}
                  </NextLink>{' '}
                  {'>'}
                </Text>
              ))}
            </Group>

            <Group>
              <NextLink href="/contact">
                <Button>Let&apos;s Talk</Button>
              </NextLink>
            </Group>
          </Group>

          <Box hiddenFrom="md">
            <DrawerNavbar />
          </Box>
        </Group>
      </LayoutSection>

      <Divider />
    </>
  );
}

function DrawerNavbar() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        position="right"
        size={320}
        styles={{ body: { padding: 0 } }}
        hiddenFrom="md"
      >
        <div>
          <Group justify="end" p={'md'} mih={88}>
            <ActionIcon
              size={ICON_WRAPPER_SIZE + 4}
              variant="light"
              color="dark"
              onClick={close}
            >
              <IconX size={ICON_SIZE + 4} stroke={ICON_STROKE_WIDTH} />
            </ActionIcon>
          </Group>

          <Divider />
        </div>

        <Stack gap={0} py={'md'} px={'lg'}>
          {links.map((li) => (
            <NavLink
              key={li.label}
              component={Link}
              href={li.link}
              px={0}
              onClick={close}
              label={
                <Text inherit>
                  {'</'}
                  <Text component="span" inherit fz={'lg'} c={'pri'}>
                    {li.label}
                  </Text>{' '}
                  {'>'}
                </Text>
              }
            />
          ))}
        </Stack>
      </Drawer>

      <Group onClick={open}>
        {opened ? (
          <IconX size={28} stroke={ICON_STROKE_WIDTH} />
        ) : (
          <Box h={30} w={28}>
            <Burger size={'sm'} />
          </Box>
        )}
      </Group>
    </>
  );
}
