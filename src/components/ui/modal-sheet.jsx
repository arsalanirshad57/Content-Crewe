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
  onClose,
  skipOverlay,
}) => {
  const drawerRef = React.useRef(null);

  React.useEffect(() => {
    const outsideClickHandler = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        onClose();
        console.log(onClose);
      }
    };
    document.addEventListener('mousedown', outsideClickHandler);
    return () => {
      document.removeEventListener('mousedown', outsideClickHandler);
    };
  }, [onClose]);

  return (
    <Drawer.Root
      defaultOpen={defaultOpen}
      open={open}
      snapPoints={snapPoints}
      repositionInputs={false}
    >
      <Drawer.Portal>
        {!skipOverlay && (
          <Drawer.Overlay className='fixed inset-0 backdrop-blur-sm' />
        )}
        <Drawer.Content
          ref={drawerRef}
          className={cn(
            'border border-white/10 bg-black fixed bottom-0 left-0 right-0 outline-none shadow-sheet rounded-t-2xl h-full !z-50 overflow-hidden'
          )}
        >
          {!skipHandle && (
            <Drawer.Handle className='mt-4 !bg-neutral-400 hover:!bg-neutral-500 cursor-grab' />
          )}
          <Scrollable className={cn('h-fit !p-0', className)}>
            {children}
          </Scrollable>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
