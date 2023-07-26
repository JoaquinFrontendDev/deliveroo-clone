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
import AccountHeader from '../../components/Account/AccountHeader/AccountHeader'
import AccountMain from '../../components/Account/AccountMain/AccountMain'


const MyAccountScreen = () => {

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingBottom: 50 }}>
      <SafeAreaView className='flex-1'>
        <AccountHeader />
        <AccountMain />
      </SafeAreaView>
      <Toast config={toastConfig} />
    </ScrollView>
  )
}

export default MyAccountScreen
