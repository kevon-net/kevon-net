import React from 'react';
import LayoutSection from '@repo/components/layout/section';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import {
  Badge,
  Card,
  Divider,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { services } from '@/data/services';
import CardTechnical from '@/components/common/cards/technical';
import IntroSection from '@repo/components/layout/intros/section';
import {
  Icon,
  IconBrain,
  IconBrandGit,
  IconBrandMantine,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPrisma,
  IconBrandTypescript,
  IconBrandVercel,
  IconDatabase,
  IconPuzzle,
  IconSettings,
  IconTool,
} from '@tabler/icons-react';

export default function Technical() {
  return (
    <>
      <LayoutSection
        id={'technical'}
        pt={SECTION_SPACING * 2}
        mb={SECTION_SPACING * 2}
      >
        <IntroSection
          options={{ alignment: 'start', spacing: true }}
          props={{
            title: (
              <Title order={2} fw={500} fz={'var(--mantine-h1-font-size)'}>
                Technical Strength
              </Title>
            ),
            desc: (
              <Text maw={{ xs: '66%', sm: '50%', md: '66%', lg: '50%' }}>
                I focus on building production-ready systems with an emphasis on{' '}
                <Text component="span" inherit c={'pri'}>
                  performance, scalability, and maintainability
                </Text>
                . Below are some of the key engineering principles and patterns
                I apply in my work.
              </Text>
            ),
          }}
        />

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
          {technicalData.map((section) => (
            <CardTechnical key={section.title} props={section} />
          ))}
        </SimpleGrid>
      </LayoutSection>

      <LayoutSection
        id={'technical-tools'}
        pb={SECTION_SPACING * 2}
        mt={SECTION_SPACING * 2}
      >
        <IntroSection
          options={{ alignment: 'start', spacing: true }}
          props={{
            title: (
              <Title order={2} fw={500} fz={'var(--mantine-h1-font-size)'}>
                Core Technologies
              </Title>
            ),
            desc: (
              <Text maw={{ xs: '66%', sm: '50%', md: '66%', lg: '50%' }}>
                A curated set of technologies I use to build{' '}
                <Text component="span" inherit c={'pri'}>
                  scalable, maintainable, and high-performance
                </Text>{' '}
                applications.
              </Text>
            ),
          }}
        />

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          <TechBlock
            title="Frontend"
            items={tech.frontend}
            icon={
              <IconBrandNextjs size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
            }
          />
          <TechBlock
            title="Backend"
            items={tech.backend}
            icon={<IconDatabase size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
          />
          <TechBlock
            title="Tooling"
            items={tech.tooling}
            icon={<IconTool size={18} />}
          />
        </SimpleGrid>
      </LayoutSection>
    </>
  );
}

const technicalData = [
  {
    icon: IconSettings,
    title: 'Performance & Optimization',
    points: [
      'Reduced unnecessary re-renders through optimized component structure and memoization strategies',
      'Minimized layout shifts by constructing dynamic content off-DOM before injection',
      'Centralized timezone and locale formatting to avoid repeated computation',
      'Improved event handling efficiency using delegation patterns',
    ],
  },
  {
    icon: IconBrain,
    title: 'Backend & System Design',
    points: [
      'Optimized database operations using transactional workflows and query batching',
      'Designed APIs with clear separation of concerns and predictable data contracts',
      'Ensured consistency across distributed operations through controlled sync strategies',
      'Structured systems for scalability without unnecessary complexity',
    ],
  },
  {
    icon: IconPuzzle,
    title: 'Frontend Engineering',
    points: [
      'Built scalable UI systems using component-driven architecture',
      'Leveraged App Router patterns for efficient routing and data handling',
      'Managed complex client state using lightweight state management',
      'Focused on clean abstractions for maintainability',
    ],
  },
];

const tech = {
  frontend: [
    {
      icon: IconBrandNextjs,
      label: 'Next.js',
      detail: 'App Router, SSR, routing',
    },
    {
      icon: IconBrandTypescript,
      label: 'TypeScript',
      detail: 'type-safe architecture',
    },
    {
      icon: IconBrandMantine,
      label: 'Mantine',
      detail: 'UI systems & components',
    },
  ],
  backend: [
    {
      icon: IconBrandNodejs,
      label: 'Node.js',
      detail: 'API design & services',
    },
    {
      icon: IconDatabase,
      label: 'PostgreSQL',
      detail: 'relational data modeling',
    },
    {
      icon: IconBrandPrisma,
      label: 'Prisma',
      detail: 'transactions, batching',
    },
  ],
  tooling: [
    {
      icon: IconBrandGit,
      label: 'Git / GitHub',
      detail: 'version control & workflows',
    },
    {
      icon: IconBrandVercel,
      label: 'Vercel',
      detail: 'deployment & edge delivery',
    },
    {
      icon: IconBrandNodejs,
      label: 'ESLint / Prettier',
      detail: 'code quality & consistency',
    },
  ],
};

function TechBlock({
  title,
  items,
  icon,
}: {
  title: string;
  items: { icon: Icon; label: string; detail: string }[];
  icon: React.ReactNode;
}) {
  return (
    <Card withBorder p="lg" bg={'transparent'}>
      <Stack gap="xl">
        <Stack gap={'sm'}>
          <Group gap="xs">
            {icon}
            <Title order={2} fz={'xl'}>
              {title}
            </Title>
          </Group>

          <Text size="sm" c="dimmed">
            {title === 'Frontend' &&
              'Building scalable UI and performant user experiences'}
            {title === 'Backend' &&
              'Designing reliable systems with strong data integrity'}
            {title === 'Tooling' &&
              'Ensuring efficient workflows and consistent code quality'}
          </Text>
        </Stack>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {items.map((item) => (
            <Badge
              key={item.label}
              size="lg"
              tt={'none'}
              mih={32}
              // leftSection={
              //   <item.icon size={ICON_SIZE - 2} stroke={ICON_STROKE_WIDTH} />
              // }
              variant={
                item.label === 'Next.js' || item.label === 'PostgreSQL'
                  ? 'filled'
                  : 'light'
              }
            >
              {item.label} ({item.detail})
            </Badge>
          ))}
        </div>
      </Stack>
    </Card>
  );
}
