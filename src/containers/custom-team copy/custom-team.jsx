'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'sonner';
import { useMediaQuery } from '@/hooks';
import { CustomTeamModal } from './custom-team.modal';
import { CustomTeamModalSheet } from './custom-team.sheet';

export const CustomTeamForm = ({ open, onClose, user }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const isMdScreen = useMediaQuery('(min-width: 786px)');

  const methods = useForm({
    resolver: yupResolver({}),
    defaultValues: {
      name: user?.displayName || '',
      email: user?.email || '',
      message: '',
    },
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    if (user) {
      reset({
        name: user?.displayName || '',
        email: user?.email || '',
        message: '',
      });
    }
  }, [user, reset]);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
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
    <CustomTeamModal
      {...{
        open,
        onClose,
        handleSubmit,
        onSubmit,
        methods,
        isLoading,
      }}
    />
  ) : (
    <CustomTeamModalSheet
      {...{
        open,
        onClose,
        handleSubmit,
        onSubmit,
        methods,
        isLoading,
      }}
    />
  );
};
