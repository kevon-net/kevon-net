import React, { useEffect, useState } from 'react';
import classes from './main.module.scss';
import { Box, BoxProps } from '@mantine/core';

type MainProps = {
  text: string;
} & BoxProps;

export default function Main({ text, ...restProps }: MainProps) {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    let timeout: number;

    const triggerGlitch = () => {
      setGlitching(true);
      timeout = window.setTimeout(
        () => {
          setGlitching(false);
          timeout = window.setTimeout(
            triggerGlitch,
            1000 + Math.random() * 3000
          );
        },
        200 + Math.random() * 200
      );
    };

    triggerGlitch();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box
      className={`${classes.glitch} ${glitching ? classes.glitching : ''}`}
      data-text={text} // <-- needed for ::before & ::after
      {...restProps}
    >
      <span className={classes.ghostX} aria-hidden="true">
        {text}
      </span>
      {text}
    </Box>
  );
}
