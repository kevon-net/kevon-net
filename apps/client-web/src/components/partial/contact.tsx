import React from 'react';
import {
  Grid,
  GridCol,
  Stack,
  Title,
  Anchor,
  Text,
  Card,
  Group,
  Box,
} from '@mantine/core';
import { contact } from '@/data/links';
import FormContact from '@repo/components/form/contact';
import { IconBrandLinkedin, IconExternalLink } from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants/sizes';
import { EMAILS } from '@repo/constants/app';
import CardGithub from '../common/cards/github';

export default function Contact() {
  return (
    <Grid gutter={'xl'}>
      <GridCol span={{ base: 12, md: 6.5 }}>
        <Card
          bg={'transparent'}
          withBorder
          padding={0}
          p={{ base: 'md', md: 'xl' }}
        >
          <FormContact />
        </Card>
      </GridCol>

      <GridCol span={{ base: 12, md: 5.5 }}>
        <Stack>
          <Box>
            <Text inherit>Prefer direct contact?</Text>
          </Box>

          <Anchor inherit href={contact[1].link} target="_blank" maw={320}>
            <CardGithub props={{ link: contact[1].link, label: 'kevon-net' }} />
          </Anchor>

          <Anchor inherit href={contact[2].link} target="_blank" maw={320}>
            <Card
              padding={'lg'}
              bg={'var(--mantine-color-pri-6)'}
              c={'var(--mantine-color-white)'}
            >
              <Stack align="start">
                <Group>
                  <IconBrandLinkedin
                    size={ICON_SIZE}
                    stroke={ICON_STROKE_WIDTH}
                  />

                  <Title order={3} fz={'xl'}>
                    {contact[2].label}
                  </Title>
                </Group>

                <Text component="span" inherit>
                  {'in/kevon-kibochi'}
                  <IconExternalLink
                    size={ICON_SIZE - 4}
                    stroke={ICON_STROKE_WIDTH}
                  />
                </Text>
              </Stack>
            </Card>
          </Anchor>

          <Box c={'dimmed'} fz={'sm'}>
            <Text inherit>
              <span>Open to: </span>Full-time roles · Remote work · Freelance
              projects
            </Text>
            <Text inherit>
              Email:{' '}
              <Anchor inherit href={`mailto:${EMAILS.CONTACT}`}>
                {EMAILS.CONTACT}
              </Anchor>
            </Text>
            <Text inherit>Based in Kenya</Text>
          </Box>
        </Stack>
      </GridCol>
    </Grid>
  );
}
