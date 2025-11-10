import React from 'react';
import classes from './main.module.scss';
import { Box, BoxProps } from '@mantine/core';

export default function Main({
  props,
  ...restProps
}: { props: { text: string } } & BoxProps) {
  return (
    <Box
      className={classes.glitch}
      data-text={props.text}
      lts={2}
      {...restProps}
    >
      {props.text}
    </Box>
  );
}
