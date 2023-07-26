import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowLeftOnRectangleIcon, ChevronRightIcon } from 'react-native-heroicons/solid'
import { FIREBASE_AUTH } from '../../../../firebaseConfig'
import { signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'

const SignOutButton = () => {
  const auth = FIREBASE_AUTH
  const navigation = useNavigation()

  const onSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate('Auth', { screen: 'Login' })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <TouchableOpacity onPress={onSignOut} activeOpacity={0.9}>
      <View className='w-full py-3 px-4 flex-row items-center bg-gray-600 justify-between shadow mt-2'>
        <View className='flex-row space-x-2 items-center'>
          <ArrowLeftOnRectangleIcon color="white" size={26} />
          <View>
            <Text className='text-md font-bold text-white'>Sign Out</Text>
          </View>
        </View>
        <ChevronRightIcon size={22} color="white" />
      </View>
    </TouchableOpacity>
  )
}

export default SignOutButton
