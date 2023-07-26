import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { formatPrice } from '@utils/formatPrice'
import { addToBasket } from '@slices/basketSlice'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const DishDetailButtons = ({ id, name, description, price, image }) => {
  const [localBasketCount, setLocalBasketCount] = useState(0)
  const totalCost = price * localBasketCount
  const dispatch = useDispatch()
  const navigation = useNavigation()

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
      <View className='flex-row items-center space-x-12 absolute bottom-36 w-full justify-center'>
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
    </>
  )
}

export default DishDetailButtons
