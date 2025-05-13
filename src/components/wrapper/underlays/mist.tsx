import React from 'react';
import { images } from '@/assets/images';

import UnderlayGlass from './glass';
import UnderlayNoise from './noise';

export default function Mist({
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
        backgroundAttachment: 'fixed',

        position: 'relative',
        zIndex: 0,
      }}
    >
      <UnderlayGlass opacity={props?.opacity}>
        <UnderlayNoise>
          <div>{children}</div>
        </UnderlayNoise>
      </UnderlayGlass>
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
