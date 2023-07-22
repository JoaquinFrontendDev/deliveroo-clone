import { Text, View, SafeAreaView, Image, Platform, StyleSheet, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline'
import Constants from 'expo-constants'
import Categories from '../../components/Categories/Categories'
import FeaturedRow from '../../components/FeaturedRow/FeaturedRow'
import { useCurrentCity } from '../../hooks/useCurrentCity'
import { MapPinIcon } from 'react-native-heroicons/solid'
import UserAvatar from '../../components/UserAvatar/UserAvatar'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../slices/userSlice'
import { fetchFeaturedCategories } from '../../services/sanityService'
import { useUpdateUser } from '../../hooks/useUpdateUser'

const HomeScreen = () => {
  const navigation = useNavigation()
  const [featuredCategories, setFeaturedCategories] = useState([])
  const [city, setCity] = useState(null);
  const currentUser = useSelector(selectCurrentUser)
  const updateUser = useUpdateUser()

  useEffect(() => {
    const getCurrentCity = async () => {
      const currentCity = await useCurrentCity()
      setCity(currentCity)
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
  }, [])



  return (
    <SafeAreaView style={style.container}>
      <View className='flex-row pb-3 items-center space-x-2 px-4'>
        <UserAvatar />
        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-base'>Now</Text>
          <View className='flex-row items-center space-x-1'>
            <View>
              {city ?
                <View className='flex-row space-x-0.5 items-center'>
                  <MapPinIcon size={15} color='black' />
                  <Text className='font-extrabold text-xl'>
                    {city}
                  </Text>
                </View>
                : <Text className='text-xl text-gray-400 font-bold'>Finding city...</Text>}
            </View>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </View>
        </View>

        <UserIcon size={35} color="#00CCBB" onPress={() => navigation.navigate('MyAccount')} />
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
    })
  }
})

export default HomeScreen
