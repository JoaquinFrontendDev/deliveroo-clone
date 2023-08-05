import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { XMarkIcon } from 'react-native-heroicons/solid'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '@slices/restaurantSlice'
import Constants from 'expo-constants'

const DeliveryHeader = () => {
  const navigation = useNavigation()
  const selectedRestaurant = useSelector(selectRestaurant)

  return (
    <SafeAreaView className='z-50' style={styles.container}>
      <View className='flex-row justify-between items-center p-5'>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.9}>
          <XMarkIcon color="white" size={30} />
        </TouchableOpacity>
        <Text className='font-light text-white text-lg'>Order Help</Text>
      </View>

      <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
        <View className='flex-row justify-between'>
          <View>
            <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
            <Text className='text-4xl font-bold'>{`${ selectedRestaurant.delivery_time } min`}</Text>
          </View>

          <Image source={{
            uri: "https://links.papareact.com/fls"
          }}
            className='h-20 w-20'
          />
        </View>
        <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />

        <Text className='mt-3 text-gray-500'>
          Your order at {selectedRestaurant.title} is being prepared
        </Text>
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

export default DeliveryHeader
