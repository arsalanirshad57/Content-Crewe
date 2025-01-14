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
import ShinyText from '@/components/ui/shiny-text';
import { database } from '@/config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'sonner';

const ContactUsComponent = () => {
  const [isLoading, setIsLoading] = React.useState(false);

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
    setIsLoading(true);
    try {
      const docRef = await addDoc(collection(database, 'contact'), {
        name: data.name,
        email: data.email,
        message: data.message,
      });
      toast.success('Message Sent Sucessfully');
      reset();
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id='contact'
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
            <ShinyText
              text='Contact us Today and Unlock the Power of Video Content Creation'
              disabled={false}
              speed={3}
              className='mt-4 max-w-2xl mx-auto text-sm md:text-base'
            />
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
              <Button className='w-fit' loading={isLoading}>
                Submit
              </Button>
            </div>
          </div>
        </motion.div>
      </FormProvider>
    </section>
  );
};

ContactUsComponent.displayName = 'ContactUs';

export const ContactUs = React.memo(ContactUsComponent);
