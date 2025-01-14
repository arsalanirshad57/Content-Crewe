'use client';
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import FormProvider from '@/components/ui/form-provider';
import { Modal } from '@/components/ui/modal';
import RHFInput from '@/components/ui/rhf-input';
import { RHFTextArea } from '@/components/ui/textarea';
import { X } from 'lucide-react';

export const GetStartedModal = ({
  open,
  onClose,
  selectedPackage,
  selectedPlan,
  onSubmit,
  handleSubmit,
  methods,
  isLoading,
}) => {
  const { title, icon } = selectedPackage;
  const Icon = icon;

  return (
    <Modal className='p-0' open={open} onClose={onClose} overlay>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className='flex justify-between items-center border-b border-white/20 px-5 py-3 w-full'>
          <div
            className='flex items-center justify-center w-full space-x-2'
            onClick={onClose}
          >
            <Icon className='w-5 h-5 text-neutral-200' />
            <h4 className='text-neutral-100 text-sm md:text-lg font-medium'>
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
              readOnly={true}
              name='packageName'
              placeholder='Enter Package Name'
            />
            <RHFInput
              readOnly={true}
              type='text'
              name='planName'
              placeholder='Enter Plan Name'
            />
          </div>

          <RHFInput name='price' placeholder='Price' readOnly={true} />

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
    </Modal>
  );
};
