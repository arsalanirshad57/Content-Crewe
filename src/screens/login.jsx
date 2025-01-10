'use client';
import { Button } from '@/components/ui/button';
import FormProvider from '@/components/ui/form-provider';
import RHFInput from '@/components/ui/rhf-input';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const LoginScreen = React.memo(() => {
  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <div className='flex items-center justify-center min-h-screen '>
      <div className='flex flex-col gap-5 p-8 shadow-lg rounded-md max-w-md w-full '>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='mx-auto'
        >
          <Link href='/' className='mx-auto mb-4'>
            <img src='/logoWithText.png' alt='logo' className=' h-12' />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className='flex flex-col gap-1'>
            <h2 className=' text-2xl md:text-3xl font-semibold text-white'>
              Login
            </h2>
            <h2 className='text-sm font-medium  text-neutral-400 text-start'>
              Welcome back! Please
            </h2>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FormProvider
            onSubmit={handleSubmit(onSubmit)}
            methods={methods}
            className='flex flex-col gap-5'
          >
            <RHFInput
              name='email'
              placeholder='Enter your Email'
              label='Email'
              error={errors.name?.message}
            />
            <RHFInput
              name='password'
              type='password'
              placeholder='Enter your Password'
              label='Password'
              error={errors.password?.message}
            />
            <Button type='submit'>Login</Button>
          </FormProvider>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className='text-sm text-center text-neutral-400'>
            Don&apos;t have an account?{' '}
            <Link href='/auth/signup' className='text-gray-200 hover:underline'>
              Sign Up
            </Link>
          </p>
        </motion.div>
      </div>
      {/* Background gradient */}
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950' />
    </div>
  );
});

LoginScreen.displayName = 'LoginScreen';
