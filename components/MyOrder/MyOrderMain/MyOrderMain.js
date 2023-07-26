import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../slices/userSlice'
import BasketItem from '../../Basket/BasketItem/BasketItem'

const MyOrderMain = () => {
  const currentUser = useSelector(selectCurrentUser)

  return (
    <View className='space-y-2 flex-1 px-4'>
      <Text className='font-bold mt-4 text-lg'>Last Order</Text>
      {
        currentUser.lastOrder.flat().map((item) => (
          <View key={item.id} >
            <BasketItem count={item.count} price={item.price} id={item.id} image={item.image} name={item.name} />
          </View>
        ))
      }
    </View>
  )
}

export default MyOrderMain
