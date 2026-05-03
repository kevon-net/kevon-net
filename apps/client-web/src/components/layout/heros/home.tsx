import React from 'react';
import {
  ActionIcon,
  Badge,
  Button,
  Code,
  Grid,
  GridCol,
  Group,
  Paper,
  ScrollArea,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import IntroPage from '@repo/components/layout/intros/page';
import LayoutSection from '@repo/components/layout/section';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  FONT_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import { IconArrowDown } from '@tabler/icons-react';
import NextLink from '@repo/components/common/anchor/next-link';
import CardCodeSnippet from '@/components/common/cards/code-snippet';

export default function Home() {
  return (
    <LayoutSection id={'hero-home'}>
      <Grid align="center">
        <GridCol span={{ base: 12, lg: 6 }}>
          <Stack
            justify="center"
            gap={SECTION_SPACING}
            mih="100vh"
            py={SECTION_SPACING}
          >
            <Group gap={'xs'}>
              <Badge variant="outline">Open to opportunities</Badge>
            </Group>

            <Stack w={{ base: '100%', md: '80%' }}>
              <Title order={1} fz={FONT_SIZE.TITLE_PAGE}>
                Full-Stack Developer Building{' '}
                <Text component="span" inherit c={'pri'}>
                  Fast, Scalable Web Applications
                </Text>
              </Title>

              <Group>
                <Text>
                  I design and build high-performance web systems using Next.js,
                  TypeScript, and modern backend architecture—focused on
                  performance, scalability, and clean code.
                </Text>
              </Group>
            </Stack>

            <Group gap={'xs'}>
              <NextLink href={'/projects'}>
                <Button size="md">View My Work</Button>
              </NextLink>

              <NextLink href={'/contact'}>
                <Button size="md" color="dark" variant="subtle">
                  Get In Touch
                </Button>
              </NextLink>
            </Group>

            <Group gap={'xs'}>
              <a href={'#technical'}>
                <Button
                  variant="transparent"
                  pl={0}
                  leftSection={
                    <ThemeIcon
                      size={ICON_WRAPPER_SIZE}
                      variant="light"
                      color="dark"
                    >
                      <IconArrowDown
                        size={ICON_SIZE}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    </ThemeIcon>
                  }
                >
                  Explore
                </Button>
              </a>
            </Group>
          </Stack>
        </GridCol>

        <GridCol span={{ base: 12, lg: 6 }}>
          <CardCodeSnippet
            props={{ content: code, options: { height: '60vh' } }}
          />
        </GridCol>
      </Grid>
    </LayoutSection>
  );
}

const code = `type StoreKey = string;

type InventoryInput = {
  quantity: number;
  updatedAt: Date;
};

type SyncResult = Record<StoreKey, unknown>;

export async function syncStores(stores: StoreKey[]): Promise<SyncResult> {
  const orderedStores = [...stores].sort(
    (a, b) => (SYNC_PRIORITY[a] ?? 99) - (SYNC_PRIORITY[b] ?? 99)
  );

  return prisma.$transaction(async (tx) => {
    const results: SyncResult = {};

    for (const store of orderedStores) {
      const data: InventoryInput = await fetchStoreData(store);

      results[store] = await tx.inventory.upsert({
        where: { storeId: store },
        update: data,
        create: { storeId: store, ...data },
      });
    }

    return results;
  });
}`;
