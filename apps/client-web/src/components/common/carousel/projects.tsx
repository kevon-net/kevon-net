'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import classes from './projects.module.scss';
import { Group, Loader, Stack, Text } from '@mantine/core';
import { SECTION_SPACING } from '@repo/constants/sizes';
import CardProject from '../cards/project';
import { ProjectGet } from '@repo/types/models/project';

export default function Projects({ projects }: { projects?: ProjectGet[] }) {
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

  return projects === undefined ? (
    <Loader />
  ) : !projects ? (
    <Stack c={'dimmed'}>
      <Text>No projects found</Text>
    </Stack>
  ) : (
    <div className={classes.embla}>
      <div className={classes.embla__viewport} ref={emblaRef}>
        <div className={classes.embla__container}>
          {projects.map((p, i) => (
            <div key={i} className={classes.embla__slide}>
              <CardProject project={p} />
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
