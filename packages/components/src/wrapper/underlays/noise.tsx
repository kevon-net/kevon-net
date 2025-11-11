import React from 'react';
import { Box, BoxProps } from '@mantine/core';
import classes from './noise.module.scss';

export default function Noise({
  image,
  children,
  underlayStyles,
}: {
  image: string;
  children: React.ReactNode;
  underlayStyles?: BoxProps['style'];
}) {
  return (
    <div style={{ position: 'relative' }}>
      <Box
        className={classes.noise}
        style={{
          backgroundImage: `url(${image})`,
          backgroundAttachment: 'fixed', // <-- makes it stick
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 3,
          ...underlayStyles,
        }}
      ></Box>

      <div style={{ position: 'relative', zIndex: 4 }}>{children}</div>
    </div>
  );
}
