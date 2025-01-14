'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import FormProvider from '@/components/ui/form-provider';
import RHFInput from '@/components/ui/rhf-input';
import { RHFTextArea } from '@/components/ui/textarea';
import { ModalSheet } from '@/components/ui/modal-sheet';

export const GetStartedModalSheet = ({
  open,
  onClose,
  onOpenChange,
  selectedPackage,
  selectedPlan,
  onSubmit,
  handleSubmit,
  methods,
  isLoading,
}) => {
  const { title, icon: Icon } = selectedPackage || {};

  return (
    <ModalSheet
      className='h-[428px]'
      open={open}
      snapPoints={['75px', '450px']}
      onClose={onClose}
      onOpenChange={onOpenChange}
      overlay
    >
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className='flex justify-between items-center border-b border-white/20 w-full text-neutral-400'>
          <div className='flex items-center justify-center space-x-2 py-4 w-full'>
            {Icon && <Icon className='w-5 h-5 text-neutral-200' />}
            <h4 className='text-neutral-100 text-base font-medium'>
              {title}&apos;s {selectedPlan?.name}
            </h4>
          </div>
        </div>
        <div className='flex flex-col gap-3 p-5'>
          <div className='flex gap-3'>
            <RHFInput name='name' type='text' placeholder='Enter Full Name' />
            <RHFInput name='email' type='text' placeholder='Enter Email' />
          </div>
          <div className='flex gap-3'>
            <RHFInput
              type='text'
              readOnly
              name='packageName'
              placeholder='Package Name'
              value={selectedPackage?.title || ''}
            />
            <RHFInput
              type='text'
              readOnly
              name='planName'
              placeholder='Plan Name'
              value={selectedPlan?.name || ''}
            />
          </div>
          <RHFInput
            name='price'
            placeholder='Price'
            readOnly
            value={selectedPlan?.price || ''}
          />
          <RHFTextArea name='message' placeholder='Message' />
          <div className='flex gap-2 self-end'>
            <Button
              size='sm'
              variant='ghost'
              onClick={onClose}
              className='w-fit'
              type='button'
            >
              Close
            </Button>
            <Button
              size='sm'
              loading={isLoading}
              className='w-fit'
              type='submit'
            >
              Submit
            </Button>
          </div>
        </div>
      </FormProvider>
    </ModalSheet>
  );
};
