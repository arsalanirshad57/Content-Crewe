import React from 'react';
import { cn } from '@/lib/utils';
import { FormProvider as Form } from 'react-hook-form';

const FormProvider = ({ methods, onSubmit, children, className, ref }) => {
  return (
    <Form {...methods}>
      <form ref={ref} onSubmit={onSubmit} className={cn('w-full', className)}>
        {children}
      </form>
    </Form>
  );
};

export default FormProvider;
