import * as yup from 'yup';

export const getStartFormSchema = yup.object().shape({
  name: yup.string().required('Full name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  message: yup.string().min(10, 'Message must be at least 10 characters'),
});
