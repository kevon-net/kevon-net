import React from 'react';
import { alpha } from '@mantine/core';
import classes from './glassmorphism.module.scss';
import { images } from '@/assets/images';

export default function Glassmorphism({
  props,
  children,
}: {
  props?: { opacity?: number; image?: string };
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${props?.image || bg[0]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className={classes.glass}
        style={{
          backgroundColor: alpha(
            'var(--mantine-color-dark-9)',
            props?.opacity || 0.66
          ),
        }}
      >
        <div
          className={classes.noise}
          style={{
            backgroundImage: `url(${images.background.noise})`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

const bg = [
  images.background.image3lv7ey,
  images.background.image9dvkw8,
  images.background.imagegprzyd,
  images.background.imagejx29gq,
  images.background.imageyx17dk,
];
