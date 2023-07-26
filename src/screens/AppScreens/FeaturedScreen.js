import { View, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectFeaturedRestaurants } from '@slices/restaurantsSlice'
import RestaurantCard from '@components/Restaurant/RestaurantCard/RestaurantCard'

const FeaturedScreen = ({ route }) => {
  const { id } = route.params
  const featuredRestaurants = useSelector(state => selectFeaturedRestaurants(state, id))

  return (
    <ScrollView
      style={{ paddingTop: 20, backgroundColor: 'white', flexGrow: 1 }}
      contentContainerStyle={{
        paddingHorizontal: 15,
        flexGrow: 1,
        alignItems: 'center'
      }}
    >
      <View className='space-y-6 w-full pb-20'>
        {featuredRestaurants.map(restaurant => (
          <View className='w-full' key={restaurant._id}>
            <RestaurantCard
              id={restaurant._id}
              imageUrl={restaurant.image}
              title={restaurant.name}
              rating={restaurant.rating}
              genre={restaurant.type?.name}
              address={restaurant.address}
              short_description={restaurant.short_description}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
              delivery_time={restaurant.delivery_time}
              fullWidth
            />
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

export default FeaturedScreen
