'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getStartFormSchema } from './get-started.constant';
import { addDoc, collection } from 'firebase/firestore';
import { database } from '@/config/firebase';
import { toast } from 'sonner';
import { GetStartedModal } from './get-started.modal';
import { useMediaQuery } from '@/hooks';
import { GetStartedModalSheet } from './get-started.sheet';

export const GetStartedForm = ({
  open,
  onClose,
  selectedPackage,
  selectedPlan,
  user,
}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const isMdScreen = useMediaQuery('(min-width: 786px)');
  const { title } = selectedPackage;

  const methods = useForm({
    resolver: yupResolver(getStartFormSchema),
    defaultValues: {
      name: user?.displayName || '',
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
        name: user?.displayName || '',
        email: user?.email || '',
        packageName: title || '',
        planName: selectedPlan?.name || '',
        price: `$${selectedPlan?.price}` || '',
        message: '',
      });
    }
  }, [selectedPlan, title, user, reset]);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const docRef = await addDoc(collection(database, 'Growth-Path'), {
        name: data.name,
        email: data.email,
        message: data.message,
        price: data.price,
        title: data.packageName,
        type: data.planName,
      });
      toast.success('Message Sent Successfully');
      reset();
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  return isMdScreen ? (
    <GetStartedModal
      {...{
        open,
        onClose,
        selectedPackage,
        selectedPlan,
        handleSubmit,
        onSubmit,
        methods,
        isLoading,
      }}
    />
  ) : (
    <GetStartedModalSheet
      {...{
        open,
        onClose,
        selectedPackage,
        selectedPlan,
        handleSubmit,
        onSubmit,
        methods,
        isLoading,
      }}
    />
  );
};
