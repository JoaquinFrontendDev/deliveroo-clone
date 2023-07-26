import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../slices/userSlice'
import { addToBasket } from '../../../slices/basketSlice'

const MyOrderButton = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)

  const onOrderRedo = () => {
    dispatch(addToBasket(currentUser.lastOrder))
    navigation.navigate('Basket')
  }

  return (
    <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity
        className='bg-primary mx-5 p-4 rounded-lg flex-row items-center space-x-1'
        onPress={onOrderRedo}
        activeOpacity={0.9}
      >
        <Text className='flex-1 text-white font-extrabold text-lg text-center'>Order again</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MyOrderButton
