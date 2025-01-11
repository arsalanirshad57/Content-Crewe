import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export const RHFTextArea = React.memo(
  ({ label, name, placeholder, rows = 5 }) => {
    const { control } = useFormContext();
    return (
      <Controller
        name={name}
        control={control}
        render={({ field, formState: { errors } }) => (
          <div className='flex flex-col gap-2 w-full'>
            {label && (
              <p className='!text-white font-semibold mb-1.5'>{label}</p>
            )}
            <textarea
              name={name}
              {...field}
              placeholder={placeholder}
              rows={rows}
              className='flex min-h-[80px] resize-none w-full rounded-md border text-white border-input bg-black/50  px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground disabled:opacity-50'
            />
            {errors && (
              <p className='text-xs text-start text-red-500 transition-all duration-500 '>
                {errors[name]?.message}
              </p>
            )}
          </div>
        )}
      />
    );
  }
);

RHFTextArea.displayName = 'RHFTextArea';
