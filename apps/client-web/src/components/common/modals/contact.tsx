'use client';

import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import LayoutModal from '@repo/components/layout/modal';
import PartialContact from '@/components/partial/contact';

export default function Contact({ children }: { children: React.ReactNode }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        size={'xl'}
        withCloseButton={false}
      >
        <LayoutModal props={{ title: 'Get In Touch', close }}>
          <PartialContact />
        </LayoutModal>
      </Modal>

      <span onClick={open}>{children}</span>
    </>
  );
}
