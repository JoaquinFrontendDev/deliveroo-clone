import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { getHeaderText } from '../../utils/getHeaderText'

const NavigationHeader = ({ navigation, route }) => {

  const headerText = getHeaderText(route)

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View className='w-full bg-white py-4 px-6 items-center justify-center flex-row'>
        <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.goBack()} className='absolute left-5' >
          <ArrowLeftIcon size={20} color="#4EC0BB" />
        </TouchableOpacity>
        <Text className='text-md text-primary font-semibold'>{headerText}</Text>
      </View>
    </SafeAreaView>
  )
}

export default NavigationHeader
