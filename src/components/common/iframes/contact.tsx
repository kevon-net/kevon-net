import appData from '@/data/app';
import { Box } from '@mantine/core';
import React from 'react';

export default function Contact({ props }: { props?: { src?: string } }) {
  return (
    <Box
      component="iframe"
      src={props?.src || appData.locations.main.pin}
      title={appData.locations.main.location}
      style={{ border: 0, minHeight: 400 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen={true}
      h={{ base: 360, xs: 400, sm: 520, md: 480, lg: 560, xl: 600 }}
      w={'100%'}
    ></Box>
  );
}
