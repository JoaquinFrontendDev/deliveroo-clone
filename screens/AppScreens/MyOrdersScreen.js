import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from '../../slices/userSlice'
import EmptyOrders from '../../components/EmptyStates/EmptyOrders'
import BasketItem from '../../components/Basket/BasketItem/BasketItem'
import { useNavigation } from '@react-navigation/native'
import { addToBasket } from '../../slices/basketSlice'

const MyOrdersScreen = () => {
  const currentUser = useSelector(selectCurrentUser)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const onOrderRedo = () => {
    dispatch(addToBasket(currentUser.lastOrder))
    navigation.navigate('Basket')
  }

  if (!currentUser.lastOrder.length) {
    return <EmptyOrders />
  }

  if (currentUser.lastOrder) {
    return (
      <ScrollView className='divide-y divide-gray-200' contentContainerStyle={{ flexGrow: 1 }}>
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
        <View className='absolute bottom-10 w-full z-50'>
          <TouchableOpacity
            className='bg-primary mx-5 p-4 rounded-lg flex-row items-center space-x-1'
            onPress={onOrderRedo}
            activeOpacity={0.9}
          >
            <Text className='flex-1 text-white font-extrabold text-lg text-center'>Order again</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

export default MyOrdersScreen
