'use client';

import { Stack, Text, Transition } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import OverlayLoading from '@/components/common/overlays/loading';
import LoaderMain from '@/components/common/loaders/main';

export default function Loading() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 7000);
  }, []);

  return (
    <OverlayLoading>
      <Stack align="center" justify="center" h={'100%'}>
        <LoaderMain />

        <Transition
          mounted={mounted}
          transition="fade"
          duration={200}
          timingFunction="ease"
        >
          {(styles) => (
            <div style={styles}>
              <Text inherit fz={'xs'} ta={'center'} mt={'md'}>
                This is taking longer than expected
                <br />
                you might be on a slow network
              </Text>
            </div>
          )}
        </Transition>
      </Stack>
    </OverlayLoading>
  );
}
