import { View, Text, Image } from 'react-native'
import React from 'react'

const EmptyFavorites = () => {
  return (
    <View className='flex-1 bg-white items-center justify-center'>
      <Image source={require('@assets/empty-favorite.png')} className='w-44 h-44 relative -translate-y-14' />
      <Text className='text-base -translate-y-16 font-bold text-gray-500'>No favorites yet</Text>
    </View>
  )
}

export default EmptyFavorites
