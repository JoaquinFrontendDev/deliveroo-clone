import { View, Text } from 'react-native'
import React from 'react'
import { ChevronRightIcon } from 'react-native-heroicons/solid'

const MyAccountItem = ({ icon: Icon, label, footerText }) => {
  return (
    <View className='w-full py-4 px-4 flex-row items-center bg-white justify-between shadow'>
      <View className='flex-row space-x-2 items-center'>
        {Icon && <Icon className='text-gray-200' size={26} />}
        <View>
          {label && <Text className='text-xl font-bold text-gray-600'>{label}</Text>}
          {footerText && <Text className='text-md text-gray-400'>{footerText}</Text>}
        </View>
      </View>
      <ChevronRightIcon size={22} color="#4EC0BB"/>
    </View>
  )
}

export default MyAccountItem
