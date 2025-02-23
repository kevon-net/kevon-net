import React from 'react';

import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
} from '@mantine/core';
import classes from './faq.module.scss';
import { isFirstItem } from '@/utilities/helpers/array';

export default function Faq({ list }: { list: { q: string; a: string }[] }) {
  const items = list.map((item) => (
    <AccordionItem
      key={item.q}
      value={item.q}
      mt={isFirstItem(list, item) ? undefined : 'md'}
    >
      <AccordionControl>{item.q}</AccordionControl>
      <AccordionPanel>{item.a}</AccordionPanel>
    </AccordionItem>
  ));

  return (
    <Accordion
      defaultValue={list[0].q}
      variant="separated"
      classNames={classes}
    >
      {items}
    </Accordion>
  );
}
