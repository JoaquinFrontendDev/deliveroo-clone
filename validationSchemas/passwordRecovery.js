import * as Yup from 'yup'

export const passwordRecoveryValidationSchema = Yup.object().shape({
  userEmail: Yup
    .string()
    .email('Please enter your recovery email')
    .required('Recovery email is required')
})
