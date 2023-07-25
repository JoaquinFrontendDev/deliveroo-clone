import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../../../slices/basketSlice'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { formatPrice } from '../../../utils/formatPrice'
import { setGroupedAndUserLastOrder } from '../../../slices/userSlice'

const BasketIcon = () => {

  const selectedBasketTotal = useSelector(selectBasketTotal)
  const selectedBasketItems = useSelector(selectBasketItems)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const onViewBasket = () => {
    dispatch(setGroupedAndUserLastOrder(selectedBasketItems))
    navigation.navigate('Basket')
  }

  if (!selectedBasketItems.length) return null

  return (
    <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity
        className='bg-primary mx-5 p-4 rounded-lg flex-row items-center space-x-1'
        onPress={onViewBasket}
        activeOpacity={0.9}
      >
        <Text className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'>{selectedBasketItems.length}</Text>
        <Text className='flex-1 text-white font-extrabold text-lg text-center'>View Basket</Text>
        <Text className='text-lg text-white font-extrabold'>{formatPrice(selectedBasketTotal)}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon
