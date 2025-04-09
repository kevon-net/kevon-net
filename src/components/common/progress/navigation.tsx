'use client';

import React from 'react';
import { Progress } from '@mantine/core';
import { useScrollProgress } from '@/hooks/scroll';

export default function Navigation() {
  const { progress } = useScrollProgress();

  return (
    <Progress
      pos={'absolute'}
      top={0}
      value={progress || 0}
      radius={0}
      size={4}
    />
  );
}
