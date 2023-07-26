import { TouchableOpacity, View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { formatPrice } from '@utils/formatPrice'
import { urlFor } from '../../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '@slices/basketSlice'
import { useNavigation } from '@react-navigation/native'

const DishRow = ({ id, name, description, price, image }) => {

  const dispatch = useDispatch()
  const navigation = useNavigation()
  const selectedBasketItems = useSelector((state) => selectBasketItemsWithId(state, id))

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate('DishDetail', { id, name, description, price, image })}
        className='bg-white border p-4 border-gray-200'
        activeOpacity={0.9}
      >
        <View className='flex-row'>
          <View className='flex-1 pr-2'>
            <Text className='text-lg mb-1'>{name}</Text>
            <Text className='text-gray-400'>{description}</Text>
            <Text className='text-gray-400 mt-2'>
              {formatPrice(price)}
            </Text>
          </View>

          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4"
              }}
              source={{ uri: urlFor(image).url() }}
              className='h-20 w-20 bg-gray-300 p-4'
            />
          </View>
        </View>
      </TouchableOpacity>
    </>
  )
}

export default DishRow
