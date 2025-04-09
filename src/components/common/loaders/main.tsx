import { Center } from '@mantine/core';
import classes from './main.module.scss';

export default function Main() {
  return (
    <Center pos={'relative'}>
      <span className={`${classes.spinner} ${classes.spinnerOuter}`}></span>
      <span className={`${classes.spinner} ${classes.spinnerInner}`}></span>
      <span className={classes.center}></span>
    </Center>
  );
}
