'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import classes from './clients.module.scss';
import {
  ActionIcon,
  Center,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@/data/constants';
import {
  IconArrowLeft,
  IconArrowRight,
  IconQuoteFilled,
} from '@tabler/icons-react';
import ImageDefault from '../images/default';
import { clients } from '@/data/clients';

export default function Clients() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
    Fade(),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: any) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Get the snap points
    setScrollSnaps(emblaApi.scrollSnapList());

    // Set up listeners
    emblaApi.on('select', onSelect);
    // Initial onSelect call
    onSelect();

    // Cleanup
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Stack className={classes.embla} gap={SECTION_SPACING / 2}>
      <Group justify="center">
        {scrollSnaps.map((_, i) => (
          <Center
            key={i}
            h={100}
            w={100}
            className={`${classes.embla__dot} ${i === selectedIndex ? classes['embla__dot--selected'] : ''}`}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            mt={i % 2 == 0 ? 'xl' : undefined}
            mb={i % 2 != 0 ? 'xl' : undefined}
          >
            <ImageDefault
              src={clients[i].avatar}
              alt={clients[i].name}
              height={160}
              width={160}
              fit={'contain'}
            />
          </Center>
        ))}
      </Group>

      <Grid align="center" gutter={0}>
        <GridCol span={{ base: 12, sm: 1 }} visibleFrom="sm">
          <Group justify="start" pt={SECTION_SPACING}>
            <ActionIcon
              size={ICON_WRAPPER_SIZE * 1.25}
              color="gray"
              variant="light"
              onClick={scrollPrev}
              radius={'xl'}
            >
              <IconArrowLeft
                size={ICON_SIZE * 1.25}
                stroke={ICON_STROKE_WIDTH}
              />
            </ActionIcon>
          </Group>
        </GridCol>

        <GridCol span={{ base: 12, sm: 10 }}>
          <div className={classes.embla__viewport} ref={emblaRef}>
            <div className={classes.embla__container}>
              {clients.map((c, i) => (
                <div key={i} className={classes.embla__slide}>
                  <Stack align="center" gap={'xl'}>
                    <Stack gap={'xs'} align="center">
                      <IconQuoteFilled
                        size={ICON_WRAPPER_SIZE * 1.5}
                        color="var(--mantine-color-pri-6)"
                      />

                      <Title order={3} ta={'center'}>
                        {c.name}
                      </Title>

                      <Text size={'sm'} ta={'center'}>
                        {c.title}
                      </Text>
                    </Stack>

                    <Text fz={'xl'} ta={'center'} w={{ md: '80%', lg: '75%' }}>
                      {c.quote}
                    </Text>
                  </Stack>
                </div>
              ))}
            </div>
          </div>
        </GridCol>

        <GridCol span={{ base: 12, sm: 1 }} visibleFrom="sm">
          <Group justify="end" pt={SECTION_SPACING}>
            <ActionIcon
              size={ICON_WRAPPER_SIZE * 1.25}
              color="gray"
              variant="light"
              onClick={scrollNext}
              radius={'xl'}
            >
              <IconArrowRight
                size={ICON_SIZE * 1.25}
                stroke={ICON_STROKE_WIDTH}
              />
            </ActionIcon>
          </Group>
        </GridCol>
      </Grid>
    </Stack>
  );
}
