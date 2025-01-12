'use client';
import React from 'react';
import { Drawer } from 'vaul';
import { Scrollable } from './scroll-area';
import { cn } from '@/lib/utils';

const SnapPoints = {
  Initial: 0.1,
  Opened: 0.6,
};

export const ModalSheet = ({
  children,
  open,
  defaultOpen = true,
  skipHandle,
  snapPoints = [SnapPoints.Initial, SnapPoints.Opened],
  className,
}) => {
  React.useLayoutEffect(() => {
    document.addEventListener('focusin', (e) => e.stopImmediatePropagation());
    document.addEventListener('focusout', (e) => e.stopImmediatePropagation());
  }, []);

  return (
    <Drawer.Root
      defaultOpen={defaultOpen}
      open={open}
      handleOnly
      dismissible={false}
      modal={false}
      snapPoints={snapPoints}
      repositionInputs={false}
    >
      <Drawer.Portal>
        <Drawer.Content
          className={cn(
            'bg-white fixed bottom-0 left-0 right-0 outline-none shadow-sheet rounded-t-2xl h-full !z-50 overflow-hidden',
            !skipHandle && 'px-5'
          )}
        >
          {!skipHandle && (
            <Drawer.Handle className='mt-4 !bg-[#daa0fe] cursor-grab' />
          )}
          <Scrollable
            className={cn(
              'h-fit',
              className,
              !skipHandle ? 'py-5' : 'px-5 py-4'
            )}
          >
            {children}
          </Scrollable>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
