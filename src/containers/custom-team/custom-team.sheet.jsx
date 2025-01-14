'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import FormProvider from '@/components/ui/form-provider';
import RHFInput from '@/components/ui/rhf-input';
import { RHFTextArea } from '@/components/ui/textarea';
import { ModalSheet } from '@/components/ui/modal-sheet';
import { ShieldHalf } from 'lucide-react';

export const CustomTeamModalSheet = ({
  open,
  onClose,
  onSubmit,
  handleSubmit,
  methods,
  isLoading,
}) => {
  return (
    <ModalSheet
      className='h-[428px]'
      open={open}
      snapPoints={['75px', '450px']}
      onClose={onClose}
    >
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className='flex justify-between items-center border-b border-white/20 w-full text-neutral-400'>
          <div className='flex items-center justify-center space-x-2 py-4 w-full'>
            <ShieldHalf className='w-5 h-5 mr-2' />
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
              type='number'
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
    </ModalSheet>
  );
};
