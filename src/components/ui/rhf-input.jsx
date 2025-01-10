import { cn } from '@/lib/utils';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const RHFInput = ({ name, type, placeholder, className, readOnly }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      className='bg-transparent'
      render={({ field, formState: { errors } }) => (
        <div className='flex flex-col gap-2 w-full '>
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            readOnly={readOnly}
            autoComplete='off'
            className={cn(
              'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              className
            )}
          />
          {errors[name] && (
            <p className='text-xs text-start text-red-500 transition-all duration-500 '>
              {errors[name]?.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

RHFInput.displayName = 'RHFInput';

export default RHFInput;
