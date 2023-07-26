import { ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setRestaurant } from '../../slices/restaurantSlice'
import RestaurantHeader from '../../components/Restaurant/RestaurantHeader/RestaurantHeader'
import RestaurantMain from '../../components/Restaurant/RestaurantMain/RestaurantMain'
import RestaurantDishes from '../../components/Restaurant/RestaurantDishes/RestaurantDishes'
import BasketIcon from '../../components/Basket/BasketIcon/BasketIcon'

const RestaurantScreen = () => {

  const {
    params: {
      id,
      imageUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
      delivery_time
    },
  } = useRoute()

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imageUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
        delivery_time
      }))
  }, [dispatch])

  const dispatch = useDispatch()

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <RestaurantHeader imageUrl={imageUrl} id={id} />
        <RestaurantMain address={address} genre={genre} rating={rating} short_description={short_description} title={title} />
        <RestaurantDishes dishes={dishes} />
      </ScrollView>
    </>
  )
}

export default RestaurantScreen
