import { cn } from '@/lib/utils';
import * as ScrollArea from '@radix-ui/react-scroll-area';

const Component = ({
  orientation = 'vertical',
  className,
  children,
  style,
  onClick,
}) => {
  return (
    <ScrollArea.Root
      className={cn('size-full overflow-hidden', className)}
      style={style}
      onClick={onClick}
    >
      <ScrollArea.Viewport className='size-full overflow-hidden'>
        {children}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        orientation={orientation}
        className={cn(
          orientation === 'vertical'
            ? 'w-1 lg:w-2'
            : 'h-1 lg:h-1.5 flex flex-col'
        )}
      >
        <ScrollArea.Thumb className='relative flex-1 rounded bg-gray-400/50 hover:bg-gray-800/50 transition-colors' />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
};

export const Scrollable = Component;
