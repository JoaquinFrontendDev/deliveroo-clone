import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'

const HomeSearchAndFilters = () => {
  return (
    <View className='flex-row items-center space-x-2 pb-2 mx-4'>
      <View className='flex-row space-x-2 bg-gray-200 p-3 flex-1 items-center rounded-md'>
        <MagnifyingGlassIcon color="gray" size={20} />
        <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
      </View>
      <AdjustmentsVerticalIcon color="#00CCBB" />
    </View>
  )
}

export default HomeSearchAndFilters
