'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import classes from './clients.module.scss';
import { Box, Grid, GridCol, Group, Stack, Text, Title } from '@mantine/core';
import { ICON_WRAPPER_SIZE, SECTION_SPACING } from '@/data/constants';
import { IconQuoteFilled } from '@tabler/icons-react';
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

  return (
    <div className={classes.embla}>
      <div className={classes.embla__viewport} ref={emblaRef}>
        <div className={classes.embla__container}>
          {clients.map((c, i) => (
            <div key={i} className={classes.embla__slide}>
              <Stack gap={'xl'}>
                <Grid align="center" gutter={{ base: 'md', sm: 'xl' }}>
                  <GridCol span={{ base: 12, xs: 4, md: 12 }}>
                    <Box
                      style={{
                        border: '4px solid var(--mantine-color-gray-light)',
                        borderRadius: 'var(--mantine-radius-sm)',
                        overflow: 'hidden',
                      }}
                      maw={{ md: 180 }}
                    >
                      <ImageDefault
                        src={clients[i].avatar}
                        alt={clients[i].name}
                        height={{ base: 200, xs: 180, sm: 220, md: 180 }}
                        width={'100%'}
                      />
                    </Box>
                  </GridCol>

                  <GridCol span={{ base: 12, xs: 8, md: 12 }}>
                    <Stack align="start">
                      <IconQuoteFilled
                        size={ICON_WRAPPER_SIZE * 1.5}
                        color="var(--mantine-color-pri-6)"
                      />

                      <Stack>
                        <div>
                          <Title order={3}>{c.name}</Title>

                          <Text size={'sm'}>{c.title}</Text>
                        </div>

                        <Text>{c.quote}</Text>
                      </Stack>
                    </Stack>
                  </GridCol>
                </Grid>
              </Stack>
            </div>
          ))}
        </div>
      </div>

      <Group justify="center" mt={SECTION_SPACING / 2}>
        {scrollSnaps.map((_, i) => (
          <div
            key={i}
            className={`${classes.embla__dot} ${i === selectedIndex ? classes['embla__dot--selected'] : ''}`}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          ></div>
        ))}
      </Group>
    </div>
  );
}
