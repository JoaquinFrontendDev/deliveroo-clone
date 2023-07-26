import { ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../slices/userSlice'
import EmptyOrders from '../../components/EmptyStates/EmptyOrders'
import MyOrderMain from '../../components/MyOrder/MyOrderMain/MyOrderMain'
import MyOrderButton from '../../components/MyOrder/MyOrderButton/MyOrderButton'

const MyOrdersScreen = () => {
  const currentUser = useSelector(selectCurrentUser)

  if (!currentUser.lastOrder.length) {
    return <EmptyOrders />
  }

  if (currentUser.lastOrder) {
    return (
      <ScrollView className='divide-y divide-gray-200' contentContainerStyle={{ flexGrow: 1 }}>
        <MyOrderMain />
        <MyOrderButton />
      </ScrollView>
    )
  }
}

export default MyOrdersScreen
