import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '@slices/restaurantSlice'
import { urlFor } from '../../../../sanity'
import { useNavigation } from '@react-navigation/native'
import { XCircleIcon } from 'react-native-heroicons/solid'

const BasketHeader = () => {
  const selectedRestaurant = useSelector(selectRestaurant)
  const navigation = useNavigation()

  return (
    <>
      <View className='p-5 border-b border-primary bg-white shadow-xs'>
        <View className='mt-4'>
          <Text className='text-lg font-bold text-center'>Basket</Text>
          <Text className='text-center text-gray-400'>{selectedRestaurant.title}</Text>
        </View>

        <TouchableOpacity
          onPress={navigation.goBack}
          className='rounded-full bg-gray-100 absolute top-3 right-5'
          activeOpacity={0.9}
        >
          <XCircleIcon color="#00CCBB" height={50} width={50} />
        </TouchableOpacity>
      </View>

      <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
        <Image source={{
          uri: urlFor(selectedRestaurant.imageUrl).url(),
        }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
        <Text className='flex-1 text-gray-600'>{`Delivers in ${ selectedRestaurant.delivery_time } min`}</Text>
        <TouchableOpacity>
          <Text className='text-primary'>Change</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default BasketHeader
