import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '@slices/restaurantSlice'

const DeliveryMap = () => {
  const selectedRestaurant = useSelector(selectRestaurant)

  return (
    <MapView
      initialRegion={{
        latitude: Number(selectedRestaurant.lat),
        longitude: Number(selectedRestaurant.long),
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      }}
      className='flex-1 -mt-10 z-0'
      mapType='standard'
    >
      <Marker
        coordinate={{
          latitude: Number(selectedRestaurant.lat),
          longitude: Number(selectedRestaurant.long),
        }}
        title={selectedRestaurant.title}
        description={selectedRestaurant.short_description}
        identifier='origin'
        pinColor='#00CCBB'
      />
    </MapView>
  )
}

export default DeliveryMap
