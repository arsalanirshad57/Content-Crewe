import React from 'react';
import { Dialog } from './dialog';

export const modal = ({ open, onOpenChange, className, children, overlay }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        {overlay && <Dialog.Overlay />}
        <Dialog.Content>{children}</Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
};
