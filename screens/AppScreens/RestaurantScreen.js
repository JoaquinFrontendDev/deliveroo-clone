import { ScrollView, View, Text, Image, StyleSheet, Platform } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../../sanity'
import Constants from 'expo-constants'
import { TouchableOpacity } from 'react-native'
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import DishRow from '../../components/DishRow/DishRow'
import BasketIcon from '../../components/BasketIcon/BasketIcon'
import { useDispatch } from 'react-redux'
import { setRestaurant } from '../../slices/restaurantSlice'

const RestaurantScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

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
      lat
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
        lat
      }))
  }, [dispatch])

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View>
          <Image
            source={{ uri: urlFor(imageUrl).url() }}
            className='w-full h-64 bg-gray-300 p-4'
            style={styles.image}
          />
          <TouchableOpacity
            className='absolute top-14 left-5 bg-gray-100 rounded-full p-2'
            onPress={navigation.goBack}
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className='bg-white'>
          <View className='px-4 pt-4'>
            <Text className='text-3xl font-bold'>{title}</Text>
            <View className='flex-row space-x-1 my-1'>
              <StarIcon size={22} color='green' opacity={0.5} />
              <View className='text-xs text-gray-500 flex-row space-x-2 items-center'>
                <Text className='text-green-500'>{rating}</Text>
                <Text>{genre}</Text>
              </View>
            </View>
            <View className='flex-row space-x-1 my-1'>
              <MapPinIcon size={22} color='gray' opacity={0.4} />
              <View className='text-xs text-gray-500 flex-row space-x-2 items-center'>
                <Text className='text-gray-500'>{`Nearby · ${ address }`}</Text>
              </View>
            </View>

            <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
          </View>

          <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text className='pl-2 flex-1 text-md font-bold'>
              Have a food allergy?
            </Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className='pb-32'>
          <Text className='px-4 pt-6 mb-3 font-bold text-xl'>Menu</Text>
          {dishes.map(dish =>
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />)}
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    marginTop: Platform.select({
      'android': Constants.statusBarHeight
    })
  }
})

export default RestaurantScreen
