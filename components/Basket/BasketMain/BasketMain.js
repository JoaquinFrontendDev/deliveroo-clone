import { View, ScrollView } from 'react-native'
import React from 'react'
import BasketItem from '../BasketItem/BasketItem'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../slices/userSlice'

const BasketMain = () => {
  const currentUser = useSelector(selectCurrentUser)

  return (
    <ScrollView className='divide-y divide-gray-200 px-1 space-y-2'>
      {currentUser.lastOrder.flat().map((item) => (
        <View key={item.id} >
          <BasketItem count={item.count} price={item.price} id={item.id} image={item.image} name={item.name} />
        </View>
      ))}
    </ScrollView>
  )
}

export default BasketMain
