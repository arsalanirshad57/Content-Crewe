'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'sonner';
import { useMediaQuery } from '@/hooks';
import { CustomTeamModal } from './custom-team.modal';
import { CustomTeamModalSheet } from './custom-team.sheet';
import { CustomTeamSchema } from './custom-team.constant';
import { addDoc } from 'firebase/firestore';
import { database } from '@/config/firebase';

export const CustomTeamForm = ({ open, onClose, user }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const isMdScreen = useMediaQuery('(min-width: 786px)');

  const methods = useForm({
    resolver: yupResolver(CustomTeamSchema),
    defaultValues: {
      name: user?.displayName || '',
      email: user?.email || '',
      message: '',
      editors: '',
      graphicDesigners: '',
      contentStrategists: '',
      socialMediaLink: '',
    },
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    if (user) {
      reset({
        name: user?.displayName || '',
        email: user?.email || '',
        message: '',
        editors: '',
        graphicDesigners: '',
        contentStrategists: '',
        socialMediaLink: '',
      });
    }
  }, [user, reset]);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const docRef = await addDoc(collection(database, 'custom-team'), {
        name: data.name,
        email: data.email,
        numberofEditors: data.editors,
        numberofGraphicdesigner: data.graphicDesigners,
        numberofContentStrategis: data.contentStrategists,
        socialLink: data.socialMediaLink,
        messages:data.message
      });

      toast.success('Message Sent Successfully');
      reset();
    } catch (error) {
      toast.error(error.message || 'An error occurred');
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  return isMdScreen ? (
    <CustomTeamModal
      open={open}
      onClose={onClose}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      methods={methods}
      isLoading={isLoading}
    />
  ) : (
    <CustomTeamModalSheet
      open={open}
      onClose={onClose}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      methods={methods}
      isLoading={isLoading}
    />
  );
};
