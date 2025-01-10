'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { RHFTextArea } from '@/components/ui/textarea';
import FormProvider from '@/components/ui/form-provider';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import RHFInput from '@/components/ui/rhf-input';
import { Button } from '@/components/ui/button';

const ContactUsComponent = () => {
  const messageSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    message: Yup.string().required('Please write your Message'),
  });

  const defaultValues = {
    name: '',
    email: '',
    message: '',
  };

  const methods = useForm({
    resolver: yupResolver(messageSchema),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const onSubmit = async (data) => {
    try {
      reset();
    } catch (error) {
      console.log('FAILED...', error.text);
    }
  };

  return (
    <section
      id='whyUs'
      className='py-24 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8'
    >
      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-16'
      >
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='text-center'
          >
            <h2 className='text-3xl font-bold sm:text-4xl text-white'>
              CONTACT US
            </h2>
            <p className='mt-4 text-neutral-400'>
              Contact us Today and Unlock the Power of Video Content Creation
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <div className='flex flex-col gap-4 max-w-4xl mx-auto'>
            <div className='flex gap-4'>
              <RHFInput type='text' name='name' placeholder='Name' />
              <RHFInput type='email' name='email' placeholder='Email' />
            </div>
            <RHFTextArea name='message' rows={10} placeholder='Message' />
            <div className='self-end'>
              <Button className='w-fit'>Submit</Button>
            </div>
          </div>
        </motion.div>
      </FormProvider>
    </section>
  );
};

ContactUsComponent.displayName = 'ContactUs';

export const ContactUs = React.memo(ContactUsComponent);
