import { Pagination, PaginationProps } from '@mantine/core';
import React from 'react';
import classes from './main.module.scss';

export default function Main({ ...restProps }: {} & PaginationProps) {
  return <Pagination classNames={classes} {...restProps} />;
}
