'use client';
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import FormProvider from '@/components/ui/form-provider';
import { Modal } from '@/components/ui/modal';
import RHFInput from '@/components/ui/rhf-input';
import { RHFTextArea } from '@/components/ui/textarea';
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getStartFormSchema } from './get-started.constant';
import { ModalSheet } from '@/components/ui/modal-sheet';

export const GetStartedModal = ({
  open,
  onClose,
  selectedPackage,
  selectedPlan,
  user,
}) => {
  const { title, icon } = selectedPackage;
  const Icon = icon;

  const methods = useForm({
    resolver: yupResolver(getStartFormSchema),
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      packageName: title || '',
      planName: selectedPlan?.name || '',
      price: `$${selectedPlan?.price}` || '',
      message: '',
    },
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    if (selectedPlan?.name || title) {
      reset({
        name: user?.name || '',
        email: user?.email || '',
        packageName: title || '',
        planName: selectedPlan?.name || '',
        price: `$${selectedPlan?.price}` || '',
        message: '',
      });
    }
  }, [selectedPlan, title, user, reset]);

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
  };

  return (
    <ModalSheet className='p-0' open={open} onClose={onClose} overlay>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className='flex justify-between items-center border-b border-white/20 px-5 py-2 w-full'>
          <div className='flex items-center space-x-2' onClick={onClose}>
            <Icon className='w-5 h-5 text-neutral-200' />
            <h4 className='text-neutral-100 text-sm md:text-lg font-medium'>
              {title}&apos;s {selectedPlan?.name}
            </h4>
          </div>
          <span className='bg-neutral-800/50 text-neutral-400 hover:bg-neutral-800 rounded-full cursor-pointer p-2'>
            <X size={15} />
          </span>
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
          <div className='self-end'>
            <Button size='sm' className='w-fit' type='submit'>
              Submit
            </Button>
          </div>
        </div>
      </FormProvider>
    </ModalSheet>
  );
};
