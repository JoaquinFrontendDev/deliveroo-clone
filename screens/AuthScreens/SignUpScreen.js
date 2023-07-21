import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserInState } from '../../slices/userSlice'
import { FIREBASE_AUTH } from '../../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { Formik, useField } from 'formik';
import { signupValidationSchema } from '../../validationSchemas/signup'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import TextInputField from '../../components/TextInputField/TextInputField'
import { toastConfig } from '../../components/Toaster/toastConfig'
import Toast from 'react-native-toast-message'
import { showToast } from '../../components/Toaster/showToast'

const SignUpScreen = () => {
  const auth = FIREBASE_AUTH
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch()
  const navigation = useNavigation()

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
      user.displayName = `${ firstName } ${ lastName }`
      dispatch(setUserInState({ displayName: user.displayName, email: user.email, photoUrl: user.photoURL }))
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
            >
              <ArrowLeftIcon color="#00CCBB" size={25} />
            </TouchableOpacity>
            <View className='absolute top-14 right-5'>
              <Text className='text-xl text-[#00CCBB]'>{`Let's signup!`}</Text>
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
                <Text onPress={() => setPasswordVisible(!isPasswordVisible)} className='text-[#00CCBB] text-xl px-4 self-start top-2'>{isPasswordVisible ? "Hide" : "Show"}</Text>
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
                <Text className='text-xs text-gray-400 text-left'>By continuing you agree to our <Text className='text-[#00CCBB]'>T@Cs.</Text>Please also check out our <Text className='text-[#00CCBB]'>Privacy Policy</Text></Text>
              </View>

              <View className='w-full -translate-y-14'>
                <Text className='text-xs text-gray-400 text-left'>We use your data to offer you a personalised experience and to better understand and improve our services. For more information <Text className='text-[#00CCBB]'>see here</Text></Text>
              </View>

              {/* Submit button */}
              <TouchableOpacity
                className='mt-6 bg-[#00CCBB] flex-row w-full py-4 items-center justify-center rounded'
                onPress={formikSubmit}
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
