import * as Yup from 'yup';

export const CustomTeamSchema = Yup.object().shape({
  name: Yup.string()
    .required('Full name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  editors: Yup.number()
    .required('Number of editors is required')
    .min(0, 'Must be 0 or more')
    .typeError('Must be a number'),
  graphicDesigners: Yup.number()
    .required('Number of graphic designers is required')
    .min(0, 'Must be 0 or more')
    .typeError('Must be a number'),
  contentStrategists: Yup.number()
    .required('Number of content strategists is required')
    .min(0, 'Must be 0 or more')
    .typeError('Must be a number'),
  socialMediaLink: Yup.string()
    .url('Invalid social media link')
    .required('Social media link is required'),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message cannot exceed 500 characters'),
});
