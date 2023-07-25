import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { removeFromBasket } from '../../../slices/basketSlice'
import { useDispatch } from 'react-redux'
import { urlFor } from '../../../sanity'
import { formatPrice } from '../../../utils/formatPrice'

const BasketItem = ({ count, image, name, price, id }) => {

  const dispatch = useDispatch()

  return (
    <View className='flex-row items-center space-x-3 bg-white py-2 px-5 border-l-4 border-primary'>
      <Text className='text-[#4EC0BB] font-bold'>{count} x</Text>
      <Image
        source={{ uri: urlFor(image).url() }}
        className='h-12 w-12 rounded-full'
      />
      <Text className='flex-1'>{name}</Text>
      <Text className='text-gray-600'>
        {formatPrice(price)}
      </Text>

      <TouchableOpacity>
        <Text
          className='text-[#4EC0BB] text-xs'
          onPress={() => dispatch(removeFromBasket({ id }))}
          activeOpacity={0.9}
        >
          Remove
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketItem
