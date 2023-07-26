import * as Yup from 'yup'

export const loginValidationSchema = Yup.object().shape({
  username: Yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: Yup
    .string()
    .required('Password is required')
})
