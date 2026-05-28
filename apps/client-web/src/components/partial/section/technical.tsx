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
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import CardTechnical from '@/components/common/cards/technical';
import IntroSection from '@repo/components/layout/intros/section';
import {
  IconAppWindow,
  IconBrandNextjs,
  IconBrandSpeedtest,
  IconCodeAi,
  IconDatabase,
  IconServer2,
  IconSettingsAi,
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
              <Text maw={{ xs: '66%', md: '50%' }}>
                I focus on building production-ready systems with an emphasis on{' '}
                <Text component="span" inherit c={'pri'}>
                  performance, scalability, and maintainability
                </Text>
                , applying modern engineering patterns to solve real-world
                problems efficiently. Below are some of the key engineering
                principles and patterns I apply in my work.
              </Text>
            ),
          }}
        />

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
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
              <Text maw={{ xs: '66%', md: '50%' }}>
                A curated set of technologies I use to build{' '}
                <Text component="span" inherit c={'pri'}>
                  scalable, maintainable, and high-performance
                </Text>{' '}
                applications.
              </Text>
            ),
          }}
        />

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
          <TechBlock
            title="Frontend"
            desc={tech.frontend.desc}
            items={tech.frontend.list}
            icon={
              <IconBrandNextjs size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
            }
          />

          <TechBlock
            title="Backend"
            desc={tech.backend.desc}
            items={tech.backend.list}
            icon={<IconDatabase size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
          />

          <TechBlock
            title="Tooling"
            desc={tech.tooling.desc}
            items={tech.tooling.list}
            icon={<IconTool size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
          />

          <TechBlock
            title="Intelligent Systems"
            desc={tech.intelligence.desc}
            items={tech.intelligence.list}
            icon={<IconCodeAi size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
          />
        </SimpleGrid>
      </LayoutSection>
    </>
  );
}

const technicalData = [
  {
    icon: IconBrandSpeedtest,
    title: 'Performance & Optimization',
    points: [
      'Reduced unnecessary re-renders through optimized component structure and memoization strategies',
      'Minimized layout shifts by constructing dynamic content off-DOM before injection',
      'Centralized timezone and locale formatting to avoid repeated computation',
      'Improved event handling efficiency using delegation patterns',
    ],
  },
  {
    icon: IconServer2,
    title: 'Backend & System Design',
    points: [
      'Optimized database operations using transactional workflows and query batching',
      'Designed APIs with clear separation of concerns and predictable data contracts',
      'Ensured consistency across distributed operations through controlled sync strategies',
      'Structured systems for scalability without unnecessary complexity',
    ],
  },
  {
    icon: IconAppWindow,
    title: 'Frontend Engineering',
    points: [
      'Built scalable UI systems using component-driven architecture',
      'Leveraged App Router patterns for efficient routing and data handling',
      'Managed complex client state using lightweight state management',
      'Focused on clean abstractions for maintainability',
    ],
  },
  {
    icon: IconSettingsAi,
    title: 'Intelligent Systems (AI Integration)',
    points: [
      'Integrated LLM APIs into structured workflows',
      'Designed fallback and retry mechanisms for AI responses',
      'Optimized request batching and caching to reduce cost',
    ],
  },
];

const tech = {
  frontend: {
    desc: 'Building scalable UI and performant user experiences',
    list: [
      {
        label: 'Next.js',
        detail: 'App Router, SSR, routing',
      },
      {
        label: 'TypeScript',
        detail: 'type-safe architecture',
      },
      {
        label: 'Mantine',
        detail: 'UI systems & components',
      },
    ],
  },
  backend: {
    desc: 'Designing reliable systems with strong data integrity',
    list: [
      {
        label: 'Node.js',
        detail: 'API design & services',
      },
      {
        label: 'PostgreSQL',
        detail: 'relational data modeling',
      },
      {
        label: 'Prisma',
        detail: 'transactions, batching',
      },
    ],
  },
  tooling: {
    desc: 'Ensuring efficient workflows and consistent code quality',
    list: [
      {
        label: 'Git / GitHub',
        detail: 'version control & workflows',
      },
      {
        label: 'Vercel',
        detail: 'deployment & edge delivery',
      },
      {
        label: 'ESLint / Prettier',
        detail: 'code quality & consistency',
      },
    ],
  },
  intelligence: {
    desc: 'Designing structured AI integrations within scalable applications',
    list: [
      {
        label: 'LLM APIs',
        detail: 'structured prompting, response handling',
      },
      {
        label: 'Caching & batching strategies',
        detail: 'cost and latency optimization',
      },
      // {
      //   label: 'Fallback & retry mechanisms',
      //   detail: 'Handling unreliable outputs',
      // },
      // {
      //   label: 'Context management',
      //   detail: 'Prompt + data shaping',
      // },
      {
        label: 'Streaming responses',
        detail: 'UX optimization',
      },
      {
        label: 'Workflow integration',
        detail: 'AI within user-driven and backend processes',
      },
    ],
  },
};

function TechBlock({
  title,
  desc,
  items,
  icon,
}: {
  title: string;
  desc: string;
  items: { label: string; detail: string }[];
  icon: React.ReactNode;
}) {
  return (
    <Card withBorder p={{ base: 'md', xs: 'xl' }} bg={'transparent'}>
      <Stack gap="xl">
        <Stack gap={'sm'}>
          <Group gap="xs">
            {icon}
            <Title order={2} fz={'xl'}>
              {title}
            </Title>
          </Group>

          <Text size="sm" c="dimmed">
            {desc}
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
                item.label === 'Next.js' ||
                item.label === 'PostgreSQL' ||
                item.label === 'Workflow integration'
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
