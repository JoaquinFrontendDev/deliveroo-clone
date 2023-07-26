import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../firebaseConfig'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik';
import { signupValidationSchema } from '@schemas/signup'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import TextInputField from '@components/TextInputField/TextInputField'
import { toastConfig } from '@components/Toaster/toastConfig'
import Toast from 'react-native-toast-message'
import { showToast } from '@components/Toaster/showToast'
import { useUpdateUser } from '@hooks/useUpdateUser'

const SignUpScreen = () => {
  const auth = FIREBASE_AUTH
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation()
  const updateUser = useUpdateUser()

  const initialValues = {
    firstName: '',
    lastName: '',
    userEmail: '',
    password: ''
  }

  const signUp = async ({ firstName, lastName, userEmail, password }) => {
    const username = userEmail
    try {
      showToast('info', 'signup')
      const { user } = await createUserWithEmailAndPassword(auth, username, password)
      await updateProfile(user, {
        displayName: `${ firstName } ${ lastName }`
      })
      // Espera a que updateProfile se complete antes de llamar a updateUser.
      await user.reload()
      updateUser()
      showToast('success', 'signup')
    } catch (error) {
      showToast('error', 'signup')
    }
  }

  const handleSubmit = (values) => {
    signUp(values)
  }


  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={signupValidationSchema}>
      {({ handleSubmit: formikSubmit }) => {
        return (
          <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingTop: 100, paddingBottom: 50, backgroundColor: 'white', paddingHorizontal: 18 }}>
            <TouchableOpacity
              onPress={navigation.goBack}
              className='rounded-full bg-gray-100 absolute top-12 left-5 items-center p-1'
              activeOpacity={0.9}
            >
              <ArrowLeftIcon color="#00CCBB" size={25} />
            </TouchableOpacity>
            <View className='absolute top-14 right-5'>
              <Text className='text-xl text-[#4EC0BB]'>{`Let's signup!`}</Text>
            </View>
            <SafeAreaView className='flex-1 items-center justify-center space-y-10 px-8 bg-white'>
              {/* FirstName input */}
              <View className='w-full'>
                <TextInputField
                  placeholder='First name'
                  autoFocus={true}
                  name='firstName'
                />
              </View>

              {/* LastName input */}
              <View className='w-full'>
                <TextInputField
                  placeholder='Last name'
                  name='lastName'
                />
              </View>

              {/* Email input */}
              <View className='w-full'>
                <TextInputField
                  placeholder='Email address'
                  name='userEmail'
                />
              </View>

              {/* Password input */}
              <View className='w-full flex-row'>
                <View className='flex-1'>
                  <TextInputField
                    placeholder='Password'
                    secureTextEntry={!isPasswordVisible}
                    name='password'
                  />
                </View>
                <Text onPress={() => setPasswordVisible(!isPasswordVisible)} className='text-[#4EC0BB] text-xl px-4 self-start top-2'>{isPasswordVisible ? "Hide" : "Show"}</Text>
              </View>


              {/* Footer */}
              <View className='w-full'>
                <View>
                  <Text className='text-xs text-gray-400 text-left'>
                    Make sure your password includes at least:
                  </Text>
                  <Text className='text-xs text-gray-400 text-left'>
                    · 12 characters
                  </Text>
                  <Text className='text-xs text-gray-400 text-left'>
                    · 1 number
                  </Text>
                  <Text className='text-xs text-gray-400 text-left'>
                    · 1 symbol (such as @,$,!)
                  </Text>
                  <Text className='text-xs text-gray-400 text-left'>
                    · 1 uppercase and 1 lowercase letter
                  </Text>
                  <Text>

                  </Text>
                </View>
              </View>

              <View className='w-full -translate-y-8'>
                <Text className='text-xs text-gray-400 text-left'>By continuing you agree to our <Text className='text-[#4EC0BB]'>T@Cs.</Text>Please also check out our <Text className='text-[#4EC0BB]'>Privacy Policy</Text></Text>
              </View>

              <View className='w-full -translate-y-14'>
                <Text className='text-xs text-gray-400 text-left'>We use your data to offer you a personalised experience and to better understand and improve our services. For more information <Text className='text-[#4EC0BB]'>see here</Text></Text>
              </View>

              {/* Submit button */}
              <TouchableOpacity
                className='mt-6 bg-primary flex-row w-full py-4 items-center justify-center rounded'
                onPress={formikSubmit}
                activeOpacity={0.9}
              >
                <Text className='text-white text-xl font-semibold'>Create account</Text>
              </TouchableOpacity>
            </SafeAreaView>
            <Toast config={toastConfig} />
          </ScrollView>
        )
      }}
    </Formik >
  )
}



export default SignUpScreen
