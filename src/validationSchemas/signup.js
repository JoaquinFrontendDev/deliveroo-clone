import * as Yup from 'yup'

export const signupValidationSchema = Yup.object().shape({
  firstName: Yup
    .string()
    .min(2, 'Please enter a valid name')
    .max(50, 'Your name its too long')
    .required('Firstname is required'),
  lastName: Yup
    .string()
    .min(2, 'Please enter a valid lastname')
    .max(50, 'Your lastname its too long')
    .required('Lastname is required'),
  userEmail: Yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: Yup
    .string()
    .required('Password is required')
})
