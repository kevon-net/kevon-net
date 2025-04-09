import { Pagination } from '@mantine/core';
import React from 'react';
import classes from './blog.module.scss';

export default function Blog({ props }: { props: { list: any[] } }) {
  return <Pagination total={props.list.length} classNames={classes} />;
}
