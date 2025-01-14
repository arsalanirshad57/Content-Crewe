'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import FormProvider from '@/components/ui/form-provider';
import RHFInput from '@/components/ui/rhf-input';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/config/firebase';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const SignUpSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export const SignUpScreen = React.memo(() => {
  const [isLoading, setIsLoading] = React.useState(false);

  const methods = useForm({
    resolver: yupResolver(SignUpSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const router = useRouter();

  const onSubmit = (data) => {
    setIsLoading(true);
    const { email, password } = data;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success('user Register Sucessfully');
        router.push('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex flex-col gap-5 p-8 max-w-md w-full'>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='mx-auto mb-4'
        >
          <Link href='/'>
            <img src='/logoWithText.png' alt='logo' className='h-12' />
          </Link>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className='flex flex-col gap-1'>
            <h2 className=' text-2xl md:text-3xl font-semibold text-white'>
              Create your account
            </h2>
            <p className='text-sm font-medium text-neutral-400'>
              Unlock all features!
            </p>
          </div>
        </motion.div>

        {/* Form */}
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
              name='fullName'
              placeholder='Enter your Full Name'
              label='Full Name'
              error={errors.fullName?.message}
            />
            <RHFInput
              name='email'
              placeholder='Enter your Email'
              label='Email'
              error={errors.email?.message}
            />
            <RHFInput
              name='password'
              type='password'
              placeholder='Enter your Password'
              label='Password'
              error={errors.password?.message}
            />
            <RHFInput
              name='confirmPassword'
              type='password'
              placeholder='Confirm your Password'
              label='Confirm Password'
              error={errors.confirmPassword?.message}
            />
            <Button type='submit' loading={isLoading}>
              Sign Up
            </Button>
          </FormProvider>
        </motion.div>

        {/* Login Redirect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className='text-sm text-center text-neutral-600'>
            Already have an account?
            <Link href='/auth/login' className='text-gray-200 hover:underline'>
              Login
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Background gradient */}
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950' />
    </div>
  );
});

SignUpScreen.displayName = 'SignUpScreen';
