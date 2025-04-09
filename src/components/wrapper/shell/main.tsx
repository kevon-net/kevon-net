import { SCROLL_BAR } from '@/data/constants';
import { ScrollArea } from '@mantine/core';
import React from 'react';
import WrapperUnderlayGlassmorphism from '@/components/wrapper/underlays/glassmorphism';

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <WrapperUnderlayGlassmorphism>
      <ScrollArea
        h={'100vh'}
        scrollbarSize={SCROLL_BAR.SHELL / 2}
        scrollbars={'y'}
        type="auto"
      >
        {children}
      </ScrollArea>
    </WrapperUnderlayGlassmorphism>
  );
}
