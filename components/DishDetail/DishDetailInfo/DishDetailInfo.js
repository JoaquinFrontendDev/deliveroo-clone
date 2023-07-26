import { View, Text } from 'react-native'
import React from 'react'

const DishDetailInfo = ({name, description}) => {
  return (
    <View className='px-4 py-4 space-y-2'>
      <Text className='font-bold text-2xl'>{name}</Text>
      <Text className='text-gray-600'>{description}</Text>
      <Text className='text-gray-400'>Allergen info not available</Text>
    </View>
  )
}

export default DishDetailInfo
