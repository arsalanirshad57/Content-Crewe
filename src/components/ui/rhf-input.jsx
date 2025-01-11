import { cn } from '@/lib/utils';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa6';

const RHFInput = ({ name, type, placeholder, className, readOnly }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  // toogle input type
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const isPasswordField = type === 'password';

  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      className='bg-transparent'
      render={({ field, formState: { errors } }) => (
        <div className='flex flex-col gap-2 w-full'>
          <div className='flex items-center px-3 bg-black/50 h-10 w-full rounded-md border border-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'>
            <input
              {...field}
              type={isPasswordField && showPassword ? 'text' : type}
              placeholder={placeholder}
              readOnly={readOnly}
              autoComplete='off'
              className={cn(
                'flex h-10 w-full py-2 text-sm bg-transparent text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:outline-none outline-none  disabled:cursor-not-allowed disabled:opacity-50',
                className
              )}
            />
            {isPasswordField &&
              (showPassword ? (
                <FaEye
                  className='text-neutral-400 cursor-pointer'
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaEyeSlash
                  className='text-neutral-400 cursor-pointer'
                  onClick={togglePasswordVisibility}
                />
              ))}
          </div>

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
