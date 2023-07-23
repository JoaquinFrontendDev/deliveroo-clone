import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import NavigationHeaderOptions from '../../constants/NavigationHeaderOptions'

const NavigationHeader = ({ navigation, route }) => {

  const headerText = NavigationHeaderOptions.find(option => option.route === route.name).headerText

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View className='w-full bg-white py-4 px-6 items-center justify-between flex-row'>
        <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={20} color="#4EC0BB" />
        </TouchableOpacity>
        <Text className='text-md text-[#4EC0BB]'>{headerText}</Text>
      </View>
    </SafeAreaView>
  )
}

export default NavigationHeader
