import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../slices/restaurantSlice'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../slices/basketSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'
import Constants from 'expo-constants'
import { urlFor } from '../sanity'
import { formatPrice } from '../utils/formatPrice'

const BasketScreen = () => {

  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
  const navigation = useNavigation()
  const selectedRestaurant = useSelector(selectRestaurant)
  const selectedBasketItems = useSelector(selectBasketItems)
  const selectedBasketTotal = useSelector(selectBasketTotal)
  const dispatch = useDispatch()

  useMemo(() => {
    const groupedBasketItems = selectedBasketItems.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item)
      return results
    }, {})
    setGroupedItemsInBasket(groupedBasketItems)
  }, [selectedBasketItems])

  return (
    <SafeAreaView style={styles.container} className='flex-1 bg-white'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#00CCBB] bg-white shadow-xs'>
          <View className='mt-4'>
            <Text className='text-lg font-bold text-center'>Basket</Text>
            <Text className='text-center text-gray-400'>{selectedRestaurant.title}</Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className='rounded-full bg-gray-100 absolute top-3 right-5'
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
          <Image source={{
            uri: urlFor(selectedRestaurant.imageUrl).url(),
          }}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'
          />
          <Text className='flex-1'>Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className='text-[#00CCBB]'>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className='divide-y divide-gray-200'>
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View key={key} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
              <Text className='text-[#00CCBB] '>{items.length} x</Text>
              <Image
                source={{ uri: urlFor(items[0].image).url() }}
                className='h-12 w-12 rounded-full'
              />
              <Text className='flex-1'>{items[0].name}</Text>
              <Text className='text-gray-600'>
                {formatPrice(items[0]?.price)}
              </Text>

              <TouchableOpacity>
                <Text
                  className='text-[#00CCBB] text-xs'
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className='p-5 bg-white mt-5 space-y-4'>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Subtotal</Text>
            <Text className='text-gray-400'>{formatPrice(selectedBasketTotal)}</Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Delivery Fee</Text>
            <Text className='text-gray-400'>{formatPrice(5.99)}</Text>
          </View>
          <View className='flex-row justify-between'>
            <Text>Order Total</Text>
            <Text className='font-extrabold'>{formatPrice(selectedBasketTotal + 5.99)}</Text>
          </View>

          <TouchableOpacity
            className='rounded-lg bg-[#00CCBB] p-4'
            onPress={() => navigation.navigate('PreparingOrder')}
          >
            <Text
              className='text-center text-white text-lg font-bold'

            >Place order</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.select({
      'android': Constants.statusBarHeight
    })
  }
})

export default BasketScreen
