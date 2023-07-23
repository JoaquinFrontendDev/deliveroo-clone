import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { ChevronRightIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

const MyAccountItem = ({ icon: Icon, label, footerText, redirectionUrl }) => {
  const navigation = useNavigation()

  return (
    <TouchableWithoutFeedback onPress={() => navigation.push(redirectionUrl)}>
      <View className='w-full py-3 px-4 flex-row items-center bg-white justify-between shadow'>
        <View className='flex-row space-x-2 items-center'>
          {Icon && <Icon className='text-gray-200' size={26} />}
          <View>
            {label && <Text className='text-md font-bold text-gray-600'>{label}</Text>}
            {footerText && <Text className='text-xs text-gray-400'>{footerText}</Text>}
          </View>
        </View>
        <ChevronRightIcon size={22} color="#4EC0BB" />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default MyAccountItem
