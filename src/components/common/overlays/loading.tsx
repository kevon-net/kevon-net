import React from 'react';
import { Overlay } from '@mantine/core';

export default function Loading({ children }: { children: React.ReactNode }) {
  return (
    <Overlay
      color="var(--mantine-color-body)"
      c={'var(--mantine-color-text)'}
      backgroundOpacity={0.25}
      fixed
    >
      {children}
    </Overlay>
  );
}
