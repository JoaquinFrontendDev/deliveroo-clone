import { Text, View, SafeAreaView, Image, Platform, StyleSheet, ScrollView, TextInput, TouchableHighlight, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline'
import Constants from 'expo-constants'
import Categories from '../../components/Categories/Categories'
import FeaturedRow from '../../components/FeaturedRow/FeaturedRow'
import { useCurrentCity } from '../../hooks/useCurrentCity'
import { MapPinIcon } from 'react-native-heroicons/solid'
import UserAvatar from '../../components/UserAvatar/UserAvatar'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from '../../slices/userSlice'
import { fetchAllRestaurants, fetchFeaturedCategories, getCategories } from '../../services/sanityService'
import { useUpdateUser } from '../../hooks/useUpdateUser'
import { selectCurrentCity, setCurrentCity } from '../../slices/currentCitySlice'
import { setAllRestaurants } from '../../slices/restaurantsSlice'
import { setCategories } from '../../slices/categoriesSlice'

const HomeScreen = () => {
  const navigation = useNavigation()
  const [featuredCategories, setFeaturedCategories] = useState([])
  const currentCity = useSelector(selectCurrentCity)
  const updateUser = useUpdateUser()
  const dispatch = useDispatch()

  useEffect(() => {
    const getCurrentCity = async () => {
      const { currentCity, latitude, longitude } = await useCurrentCity()
      dispatch(setCurrentCity({ currentCity, latitude, longitude }))
    }

    const fetchFeaturedData = async () => {
      try {
        const data = await fetchFeaturedCategories()
        setFeaturedCategories(data)
      } catch (error) {
        console.log(error)
      }
    }

    getCurrentCity()
    updateUser()
    fetchFeaturedData()
    fetchAllRestaurants()
      .then((data) => {
        dispatch(setAllRestaurants(data))
      })
    getCategories()
      .then((data) => {
        dispatch(setCategories(data))
      })
  }, [])



  return (
    <SafeAreaView style={style.container}>
      <View className='flex-row pb-3 items-center space-x-2 px-4'>
        <UserAvatar />
        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-base'>Now</Text>
          <View className='flex-row items-center space-x-1'>
            <View>
              {currentCity.city ?
                <View className='flex-row space-x-0.5 items-center'>
                  <MapPinIcon size={15} color='black' />
                  <Text className='font-extrabold text-xl'>
                    {currentCity.city}
                  </Text>
                </View>
                : <Text className='text-xl text-gray-400 font-bold'>Finding city...</Text>}
            </View>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </View>
        </View>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('MyAccount')}>
          <View className='bg-gray-200 rounded-full p-2' >
            <UserIcon size={22} color="#00CCBB" />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row space-x-2 bg-gray-200 p-3 flex-1 items-center rounded-md'>
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Categories />
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    marginTop: Platform.select({
      android: Constants.statusBarHeight
    }),
    marginBottom: 40
  }
})

export default HomeScreen
