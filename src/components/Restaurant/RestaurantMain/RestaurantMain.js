import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

const RestaurantMain = ({ title, rating, genre, address, short_description }) => {
  const navigation = useNavigation()

  return (
    <View className='bg-white'>
      <View className='px-4 pt-4'>
        <Text className='text-3xl font-bold'>{title}</Text>
        <View className='flex-row space-x-1 my-1'>
          <StarIcon size={22} color='green' opacity={0.5} />
          <View className='text-xs text-gray-500 flex-row space-x-2 items-center'>
            <Text className='text-green-500'>{rating}</Text>
            <Text>{genre}</Text>
          </View>
        </View>
        <View className='flex-row space-x-1 my-1'>
          <MapPinIcon size={22} color='gray' opacity={0.4} />
          <View className='text-xs text-gray-500 flex-row space-x-2 items-center'>
            <Text className='text-gray-500'>{`Nearby · ${ address }`}</Text>
          </View>
        </View>

        <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
      </View>

      <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300' onPress={() => navigation.navigate('AllergyInfo')} activeOpacity={0.9}>
        <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
        <Text className='pl-2 flex-1 text-md font-bold text-gray-600'>
          Have a food allergy?
        </Text>
        <ChevronRightIcon color="#00CCBB" />
      </TouchableOpacity>
    </View>
  )
}

export default RestaurantMain
