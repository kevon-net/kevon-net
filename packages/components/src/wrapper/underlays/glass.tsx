import React from 'react';
import { alpha, Box, BoxProps } from '@mantine/core';

export default function Glass({
  opacity,
  blur,
  children,
  underlayStyles,
}: {
  opacity?: number;
  blur?: number;
  children: React.ReactNode;
  underlayStyles?: BoxProps['style'];
}) {
  return (
    <div style={{ position: 'relative' }}>
      <Box
        style={{
          backgroundColor: alpha(
            'var(--mantine-color-dark-9)',
            opacity || 0.66
          ),
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 1,
          backdropFilter: `blur(${blur || 64}px) saturate(200%)`,
          WebkitBackdropFilter: `blur(${blur || 64}px) saturate(200%)`,
          ...underlayStyles,
        }}
      ></Box>

      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
    </div>
  );
}
