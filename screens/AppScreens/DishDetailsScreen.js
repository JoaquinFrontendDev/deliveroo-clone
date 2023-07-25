import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { XMarkIcon, MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../../sanity'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../slices/basketSlice'
import { formatPrice } from '../../utils/formatPrice'

const DishDetailsScreen = ({ route }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { id, name, description, price, image } = route.params
  const [localBasketCount, setLocalBasketCount] = useState(0)
  const totalCost = price * localBasketCount

  const handleAddToBasket = () => {
    for (let i = 0; i < localBasketCount; i++) {
      dispatch(addToBasket({ id, name, description, price, image }))
    }
    navigation.goBack()
  }

  const handleIncrementLocalCount = () => {
    setLocalBasketCount(localBasketCount + 1)
  }

  const handleDecrementLocalCount = () => {
    if (localBasketCount > 0) setLocalBasketCount(localBasketCount - 1)
  }

  return (
    <>
      <View className='bg-white shadow-xs'>
        <Image source={{
          uri: urlFor(image).url(),
        }}
          className='w-full h-60'
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className='rounded-full bg-gray-100 absolute top-3 left-5 p-1'
          activeOpacity={0.9}
        >
          <XMarkIcon color="#00CCBB" size={25} />
        </TouchableOpacity>
      </View>
      <View className='flex-1 justify-between'>
        <View className='px-4 py-4 space-y-2'>
          <Text className='font-bold text-2xl'>{name}</Text>
          <Text className='text-gray-600'>{description}</Text>
          <Text className='text-gray-400'>Allergen info not available</Text>
        </View>
        <View className='w-full items-center'>
          <View className='flex-row items-center space-x-12 pb-8'>
            <TouchableOpacity
              onPress={handleDecrementLocalCount}
              activeOpacity={0.9}
              >
              <MinusCircleIcon
                color={`${ localBasketCount <= 0 ? 'gray' : '#00CCBB' }`}
                size={40}
              />
            </TouchableOpacity>

            <Text className='font-bold text-xl'>{localBasketCount}</Text>

            <TouchableOpacity onPress={handleIncrementLocalCount} activeOpacity={0.9}>
              <PlusCircleIcon
                color="#00CCBB"
                size={40}
              />
            </TouchableOpacity>
          </View>
          <View className='w-full'>
            <TouchableOpacity
              onPress={handleAddToBasket}
              className='bg-primary mx-5 p-4 rounded-lg flex-row items-center space-x-1 justify-center mb-12'
              activeOpacity={0.9}
            >
              <Text className='text-white font-bold'>Add for {formatPrice(totalCost)}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  )
}

export default DishDetailsScreen
