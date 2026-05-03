'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import classes from './blog.module.scss';
import { Group, Loader, Stack, Text } from '@mantine/core';
import { SECTION_SPACING } from '@repo/constants/sizes';
import CardPost from '@repo/components/common/cards/post';
import { PostGet } from '@repo/types/models/post';
import { useStorePost } from '@repo/libraries/zustand/stores/post';

export default function Blog({ props }: { props?: { posts?: PostGet[] } }) {
  const { posts } = useStorePost();

  const resolvedPosts = props?.posts || posts;

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

  return resolvedPosts === undefined ? (
    <Loader />
  ) : !resolvedPosts ? (
    <Stack c={'dimmed'}>
      <Text>No posts found</Text>
    </Stack>
  ) : (
    <div className={classes.embla}>
      <div className={classes.embla__viewport} ref={emblaRef}>
        <div className={classes.embla__container}>
          {resolvedPosts.map((p, i) => (
            <div key={i} className={classes.embla__slide}>
              <CardPost props={p} />
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
