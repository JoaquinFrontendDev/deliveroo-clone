import { ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import Toast from 'react-native-toast-message'
import { toastConfig } from '@components/Toaster/toastConfig'
import AccountHeader from '@components/Account/AccountHeader/AccountHeader'
import AccountMain from '@components/Account/AccountMain/AccountMain'


const MyAccountScreen = () => {

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView className='flex-1'>
        <AccountHeader />
        <AccountMain />
      </SafeAreaView>
      <Toast config={toastConfig} />
    </ScrollView>
  )
}

export default MyAccountScreen
