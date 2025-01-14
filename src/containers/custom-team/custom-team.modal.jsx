'use client';
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import FormProvider from '@/components/ui/form-provider';
import { Modal } from '@/components/ui/modal';
import RHFInput from '@/components/ui/rhf-input';
import { RHFTextArea } from '@/components/ui/textarea';
import { ShieldHalf, X } from 'lucide-react';

export const CustomTeamModal = ({
  open,
  onClose,
  onSubmit,
  handleSubmit,
  methods,
  isLoading,
}) => {
  return (
    <Modal className='p-0' open={open} onClose={onClose} overlay>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className='flex justify-between items-center border-b border-white/20 px-5 py-3 w-full'>
          <div
            className='flex items-center justify-center w-full space-x-2'
            onClick={onClose}
          >
            <ShieldHalf className='w-5 h-5 text-neutral-200' />
            <h4 className='text-neutral-100 text-base font-medium'>
              Build Your Custom Team
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
              type='number'
              name='editors'
              placeholder='Enter No of Editors'
            />
            <RHFInput
              type='number'
              name='graphicDesigners'
              placeholder='Enter No of Graphic Designers'
            />
          </div>

          <div className='flex gap-3'>
            <RHFInput
              type='number'
              name='contentStrategists'
              placeholder='Enter No of Content Strategist'
            />
            <RHFInput
              type='text'
              name='socialMediaLink'
              placeholder='Enter Any Social Media Link'
            />
          </div>

          <RHFTextArea name='message' placeholder='Message' />
          <div className='flex gap-2 self-end'>
            <Button
              size='sm'
              variant='ghost'
              onClick={onClose}
              className='w-fit'
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
