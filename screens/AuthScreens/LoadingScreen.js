import { Image, SafeAreaView, Text } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress'

export default function LoadingScreen () {
  return (
    <SafeAreaView className='bg-white flex-1 justify-center items-center'>
      <Image
        source={require('../../assets/deliveroo-logo.png')}
        className='w-72 h-72'
      />
      <Text className='text-xl px-6 mt-10 text-[#4EC0BB] font-bold text-center'>
        Just a second...
      </Text>
      <Text className='text-xl px-6 text-[#4EC0BB] mb-10 font-bold text-center'>
        We are checking your credentials
      </Text>
      <Progress.Bar size={60} indeterminate={true} color="#4EC0BB" />
    </SafeAreaView>
  )
}
