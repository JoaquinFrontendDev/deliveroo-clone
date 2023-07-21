import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../slices/userSlice'
import { FIREBASE_AUTH } from '../../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik';
import { loginValidationSchema } from '../../validationSchemas/login'
import TextInputField from '../../components/TextInputField/TextInputField'
import { showToast } from '../../components/Toaster/showToast'
import Toast from 'react-native-toast-message'
import { toastConfig } from '../../components/Toaster/toastConfig'

const LoginScreen = () => {
  const user = useSelector(selectUser)
  const auth = FIREBASE_AUTH
  const navigation = useNavigation()
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const initialValues = {
    username: '',
    password: ''
  }

  const signIn = async ({ username, password }) => {
    console.log(password, username)
    try {
      await signInWithEmailAndPassword(auth, username, password)
      showToast('success', 'login')
    } catch (error) {
      showToast('error', 'login')
    }
  }

  const handleSubmit = (values) => {
    console.log(values)
    signIn(values)
  }


  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginValidationSchema}>
      {({ handleSubmit: formikSubmit }) => {
        return (
          <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingTop: 80, paddingBottom: 50, backgroundColor: 'white', paddingHorizontal: 18 }}>
            <SafeAreaView className='flex-1 items-center justify-center space-y-10 bg-white'>
              {/* Username input */}
              <View className='w-full'>
                <TextInputField
                  placeholder='Email address'
                  autoFocus={true}
                  name='username'
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

              {/* Submit button */}
              <TouchableOpacity
                className='mt-6 bg-[#00CCBB] flex-row w-full py-4 items-center justify-center rounded'
                onPress={formikSubmit}
              >
                <Text className='text-white text-xl font-bold'>Log in</Text>
              </TouchableOpacity>

              {/* Footer */}
              <View className='border border-gray-300 rounded w-full items-center py-4'>
                <Text onPress={() => navigation.navigate('ForgetPassword')} className='text-[#00CCBB] text-xl'>Forgot password</Text>
              </View>
              <View className='flex-row items-center justify-center'>
                <View className='flex-1 bg-gray-300 h-[0.7px]'></View>
                <View className='mx-3'>
                  <Text className='text-xl text-gray-300'>
                    Or
                  </Text>
                </View>
                <View className='flex-1 bg-gray-300 h-[0.7px]'></View>
              </View>
              <View>
                <Text onPress={() => navigation.navigate('SignUp')} className='text-[#00CCBB] text-xl font-bold'>Sign Up</Text>
              </View>
            </SafeAreaView>
            <Toast config={toastConfig}/>
          </ScrollView>
        )
      }}
    </Formik >
  )
}



export default LoginScreen
