import { Text, View, SafeAreaView, Image, Platform, StyleSheet, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline'
import Constants from 'expo-constants'
import Categories from '../../components/Categories/Categories'
import FeaturedRow from '../../components/FeaturedRow/FeaturedRow'
import sanityClient from '../../sanity'
import Avatar from '../../components/UserAvatar/UserAvatar'
import { FIREBASE_AUTH } from '../../firebaseConfig'
import { useCurrentCity } from '../../hooks/useCurrentCity'

const HomeScreen = () => {
  const navigation = useNavigation()
  const [featuredCategories, setFeaturedCategories] = useState([])
  const auth = FIREBASE_AUTH
  const [city, setCity] = useState(null);

  useEffect(() => {
    const fetchCity = async () => {
      const currentCity = await useCurrentCity();
      setCity(currentCity);
    }
    fetchCity();
  }, []);

  useEffect(() => { }, [
    sanityClient
      .fetch(
        `
      *[_type == "featured"] {
        ...,
        restaurants[]->{
          ...,
          dishes[] ->
        }
      }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      }),
  ]);


  return (
    <SafeAreaView style={style.container}>
      <View className='flex-row pb-3 items-center space-x-2 px-4'>
        {auth.currentUser && !auth.currentUser.photoURL ?
          <Avatar />
          :
          (<Image
            source={{ uri: auth.currentUser.photoURL }}
            className='h-8 w-8 bg-gray-300 my-4 p-4 rounded-full' />)}
        <View className='flex-1'>
          <Text className='font-bold text-grey-400 text-xs'>Deliver now!</Text>
          <View className='flex-row items-center space-x-1'>
            <Text className='font-bold text-xl'>
              {city ? city : <Text className='text-xl text-gray-400 font-bold'>Finding city...</Text>}
            </Text>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </View>
        </View>

        <UserIcon size={35} color="#00CCBB" />
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