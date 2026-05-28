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
import CarouselSnippets from '@/components/common/carousel/snippets';
import CardCodeSnippet from '@/components/common/cards/code-snippet';

export default function Home() {
  return (
    <LayoutSection id={'hero-home'}>
      <Grid align="center">
        <GridCol span={{ base: 12, md: 6, lg: 6 }}>
          <Stack
            justify="center"
            gap={SECTION_SPACING}
            mih="100vh"
            py={SECTION_SPACING}
          >
            <Group gap={'xs'}>
              <Badge variant="outline">Open to opportunities</Badge>
            </Group>

            <Stack w={{ base: '100%', xs: '80%', md: '80%' }}>
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
                  performance, scalability, and clean code, with thoughtful
                  integration of modern tools where they add real value.
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
              <a href={'#projects'}>
                <Button
                  variant="transparent"
                  pl={0}
                  leftSection={
                    <ThemeIcon size={ICON_WRAPPER_SIZE} variant="light">
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

        <GridCol span={{ base: 12, md: 6, lg: 6 }} visibleFrom="md">
          <CarouselSnippets
            snippets={[
              <CardCodeSnippet
                key={codes[0].desc}
                props={{
                  desc: codes[0].desc,
                  content: codes[0].code,
                  options: { height: '40vh' },
                }}
              />,

              <CardCodeSnippet
                key={codes[1].desc}
                props={{
                  desc: codes[1].desc,
                  content: codes[1].code,
                  options: { height: '40vh' },
                }}
              />,

              <CardCodeSnippet
                key={codes[2].desc}
                props={{
                  desc: codes[2].desc,
                  content: codes[2].code,
                  options: { height: '40vh' },
                }}
              />,
            ]}
          />
        </GridCol>
      </Grid>
    </LayoutSection>
  );
}

// const code = `
// export async function syncStores(stores: StoreKey[]): Promise<SyncResult> {
//   const orderedStores = [...stores].sort(
//     (a, b) => (SYNC_PRIORITY[a] ?? 99) - (SYNC_PRIORITY[b] ?? 99)
//   );

//   return prisma.$transaction(async (tx) => {
//     const results: SyncResult = {};

//     for (const store of orderedStores) {
//       const data: InventoryInput = await fetchStoreData(store);

//       results[store] = await tx.inventory.upsert({
//         where: { storeId: store },
//         update: data,
//         create: { storeId: store, ...data },
//       });
//     }

//     return results;
//   });
// }
//   `;

// const code = `
// const syncStore = async (store: StoreKey, tx: Prisma.TransactionClient) => {
//   const data = await fetchStoreData(store);

//   return tx.inventory.upsert({
//     where: { storeId: store },
//     update: data,
//     create: { storeId: store, ...data },
//   });
// };

// await prisma.$transaction((tx) =>
//   Promise.all(prioritize(stores).map((store) => syncStore(store, tx)))
// );
//   `;

const codes = [
  {
    desc: 'Transactional Data Sync (Multi-Source Inventory)',
    code: `
await prisma.$transaction(async (tx) => {
  for (const store of prioritize(stores)) {
    const data = await fetchStoreData(store);

    await tx.inventory.upsert({
      where: { storeId: store },
      update: data,
      create: { storeId: store, ...data },
    });
  }
});
`,
  },

  {
    desc: 'Cached Fetch with Revalidation',
    code: `
const getProduct = cache(async (id: string) => {
  return prisma.product.findUnique({ where: { id } });
});

export async function getProductCached(id: string) {
  return revalidateTag(\`product-\${id}\`, () => getProduct(id));
}
    `,
  },

  {
    desc: 'Composable Service Pattern',
    code: `
const createOrder = (deps: Dependencies) => async (input: CreateOrderInput) => {
  const user = await deps.getUser(input.userId);
  const items = await deps.getItems(input.itemIds);

  return deps.db.order.create({
    data: buildOrder(user, items),
  });
};
    `,
  },
];
