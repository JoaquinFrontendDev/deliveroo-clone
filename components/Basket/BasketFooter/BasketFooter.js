import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketTotal } from '../../../slices/basketSlice'
import { useNavigation } from '@react-navigation/native'
import { formatPrice } from '../../../utils/formatPrice'

const BasketFooter = () => {

  const selectedBasketTotal = useSelector(selectBasketTotal)
  const navigation = useNavigation()

  return (
    <View className='p-5 bg-white mt-5 space-y-4'>
      <View className='flex-row justify-between'>
        <Text className='text-gray-400'>Subtotal</Text>
        <Text className='text-gray-400'>{formatPrice(selectedBasketTotal)}</Text>
      </View>
      <View className='flex-row justify-between'>
        <Text className='text-gray-400'>Delivery Fee</Text>
        <Text className='text-gray-400'>{formatPrice(5.99)}</Text>
      </View>
      <View className='flex-row justify-between'>
        <Text>Order Total</Text>
        <Text className='font-extrabold'>{formatPrice(selectedBasketTotal + 5.99)}</Text>
      </View>

      <TouchableOpacity
        className='rounded-lg bg-primary p-4'
        onPress={() => navigation.navigate('PreparingOrder')}
      >
        <Text
          className='text-center text-white text-lg font-bold'

        >Place order</Text>
      </TouchableOpacity>

    </View>
  )
}

export default BasketFooter
