import React from 'react';
import UnderlayGlass from './glass';
import UnderlayNoise from './noise';

export default function Mist({
  props,
  children,
}: {
  props: { opacity?: number; image: string; noiseImage?: string };
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',

        position: 'relative',
        zIndex: 0,
      }}
    >
      <UnderlayGlass opacity={props?.opacity}>
        {props.noiseImage ? (
          <UnderlayNoise image={props.noiseImage}>
            <div>{children}</div>
          </UnderlayNoise>
        ) : (
          <div>{children}</div>
        )}
      </UnderlayGlass>
    </div>
  );
}
