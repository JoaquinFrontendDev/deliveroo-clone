import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'

const DeliveryFooter = () => {
  return (
    <SafeAreaView className='bg-white flex-row items-center space-x-5 h-28'>
      <Image source={{
        uri: "https://links.papareact.com/wru"
      }}
        className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5'
      />
      <View className='flex-1'>
        <Text className='text-lg'>Joaquin Retola</Text>
        <Text className='text-gray-400'>Your Rider</Text>
      </View>

      <Text className='text-[#4EC0BB] text-lg mr-5 font-bold'>Call</Text>
    </SafeAreaView>
  )
}

export default DeliveryFooter
