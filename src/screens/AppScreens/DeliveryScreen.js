import { View } from 'react-native'
import React from 'react'
import DeliveryHeader from '@components/Delivery/DeliveryHeader/DeliveryHeader'
import DeliveryMap from '@components/Delivery/DeliveryMap/DeliveryMap'
import DeliveryFooter from '@components/Delivery/DeliveryFooter/DeliveryFooter'

const DeliveryScreen = () => {

  return (
    <View className='bg-primary flex-1'>
      <DeliveryHeader />
      <DeliveryMap />
      <DeliveryFooter />
    </View>
  )
}

export default DeliveryScreen
