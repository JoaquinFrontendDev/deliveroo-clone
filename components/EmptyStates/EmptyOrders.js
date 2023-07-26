import { View, Text, Image } from 'react-native'
import React from 'react'

const EmptyOrders = () => {
  return (
    <View className='flex-1 bg-white items-center justify-center'>
      <Image source={require('@assets/empty-orders.jpeg')} className='w-48 h-48 relative -translate-y-10' />
      <Text className='text-base -translate-y-16 font-bold text-gray-500'>No orders yet</Text>
    </View>
  )
}

export default EmptyOrders
