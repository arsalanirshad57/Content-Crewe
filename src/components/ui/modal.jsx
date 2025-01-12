import React from 'react';
import { cn } from '@/lib/utils';
import * as Dialog from '@radix-ui/react-dialog';

export const Modal = ({ open, onClose, className, children, overlay }) => {
  
  const onOpenChange = React.useCallback(
    (isOpen) => {
      if (isOpen) return;
      onClose();
    },
    [onClose]
  );

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {overlay && (
          <Dialog.Overlay className='fixed inset-0 z-50  backdrop-blur-sm  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0' />
        )}
        <Dialog.Content
          className={cn(
            'fixed left-[50%] top-[50%] z-50 p-5 grid translate-x-[-50%] translate-y-[-50%] gap-4 border border-white/20 bg-black shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg font-inter overflow-hidden',
            className
          )}
        >
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
