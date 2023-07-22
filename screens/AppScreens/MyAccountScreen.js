import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React, { useEffect } from 'react'
import { ArrowLeftIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import MyAccountItem from '../../components/MyAccountItem/MyAccountItem'
import UserAvatar from '../../components/UserAvatar/UserAvatar'
import { FIREBASE_AUTH } from '../../firebaseConfig'
import MyAccountOptions from '../../constants/MyAccountOptions'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../slices/userSlice'
import { useUploadImage } from '../../hooks/useUploadImage'
import Toast from 'react-native-toast-message'
import { toastConfig } from '../../components/Toaster/toastConfig'


const MyAccountScreen = () => {
  const navigation = useNavigation()
  const auth = FIREBASE_AUTH
  const currentUser = useSelector(selectCurrentUser)
  const { pickImage } = useUploadImage()

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingTop: 80, paddingBottom: 50 }}>
      <View className='absolute top-14 right-5'>
        <Text className='text-xl text-[#4EC0BB]'>{`My account`}</Text>
      </View>
      <TouchableOpacity
        onPress={navigation.goBack}
        className='rounded-full bg-gray-100 absolute top-12 left-5 items-center p-1'
      >
        <ArrowLeftIcon color="#00CCBB" size={25} />
      </TouchableOpacity>
      <SafeAreaView className='flex-1'>
        <View className='w-full px-[20px] flex-row items-center justify-between'>
          <View className='flex-row space-x-2 items-center'>
            <UserAvatar />
            <Text className='text-xl font-bold'>{`Hello, ${ currentUser.firstName }`}</Text>
          </View>
          <View className='flex-row space-x-1 items-center'>
            <PlusCircleIcon size={20} color="#4EC0BB" onPress={pickImage} />
            <Text className='text-md text-[#4EC0BB]'>
              {`${ currentUser.photoURL ? 'Change photo' : 'Upload photo' }`}
            </Text>
          </View>
        </View>
        <View className='flex-1 w-full mt-4 flex-col space-y-2'>
          {MyAccountOptions.map((option, index) => (
            <View key={index}>
              <MyAccountItem
                icon={option.icon}
                label={option.label}
                footerText={option.footerText}
              />
            </View>
          ))}
        </View>
      </SafeAreaView>
      <Toast config={toastConfig} />
    </ScrollView>
  )
}

export default MyAccountScreen
