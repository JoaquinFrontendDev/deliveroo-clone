import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import FaqsContent from '../../constants/FaqsContent'

const FAQsScreen = () => {

  return (
    <View className='bg-white flex-1 px-4'>
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <Text className='font-bold mt-4 text-lg'>{FaqsContent.title}</Text>
        <View>
          {FaqsContent.faqs.map(faq => (
            <View className='mt-4 space-y-2'>
              <Text className='text-primary font-semibold'>{faq.question}</Text>
              <Text className='text-xs text-gray-500'>{faq.answer}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default FAQsScreen
