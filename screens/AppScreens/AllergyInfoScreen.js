import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AllergyContent from '../../constants/AllergyInfoContent'

const AllergyInfoScreen = () => {
  return (
    <View className='bg-white flex-1 px-4'>
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <Text className='font-bold mt-4 text-lg'>{AllergyContent.title}</Text>
        <View>
          {AllergyContent.content.map(content => (
            <View className='mt-4 space-y-2'>
              <Text className='text-primary font-semibold'>{content.header}</Text>
              <Text className='text-xs text-gray-500'>{content.description}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default AllergyInfoScreen
