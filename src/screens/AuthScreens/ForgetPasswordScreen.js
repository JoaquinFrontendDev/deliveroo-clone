import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../../../firebaseConfig'
import { sendPasswordResetEmail } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik';
import TextInputField from '@components/TextInputField/TextInputField'
import Toast from 'react-native-toast-message'
import { showToast } from '@components/Toaster/showToast'
import { passwordRecoveryValidationSchema } from '@schemas/passwordRecovery'
import { toastConfig } from '@components/Toaster/toastConfig'

const ForgetPasswordScreen = () => {
  const auth = FIREBASE_AUTH
  const navigation = useNavigation()

  const initialValues = {
    userEmail: ''
  }

  const recoverEmail = async ({ userEmail }) => {
    try {
      await sendPasswordResetEmail(auth, userEmail)
      showToast('success', 'passwordRecovery')
    } catch (error) {
      showToast('error', 'passwordRecovery')
    }
  }

  const handleSubmit = (values) => {
    recoverEmail(values)
  }


  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={passwordRecoveryValidationSchema}>
      {({ handleSubmit: formikSubmit }) => {
        return (
          <SafeAreaView className='flex-1'>
            {/* Recover email input */}
            <View className='flex-1 items-center justify-center space-y-10 bg-white px-4'>
              <View className='w-full'>
                <TextInputField
                  placeholder='Enter recovery email'
                  autoFocus={true}
                  name='userEmail'
                />
              </View>

              {/* Submit button */}
              <TouchableOpacity
                className='mt-6 bg-primary flex-row w-full py-4 items-center justify-center rounded'
                onPress={formikSubmit}
                activeOpacity={0.9}
              >
                <Text className='text-white text-xl font-bold'>Reset password</Text>
              </TouchableOpacity>
            </View>
            <Toast config={toastConfig} />
          </SafeAreaView>
        )
      }}
    </Formik >
  )
}



export default ForgetPasswordScreen

