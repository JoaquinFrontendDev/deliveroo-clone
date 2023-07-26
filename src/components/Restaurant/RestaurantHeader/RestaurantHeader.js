import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../../../../sanity'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsFavorite, toggleFavorite } from '@slices/restaurantsSlice'
import { ArrowLeftIcon, HeartIcon } from 'react-native-heroicons/solid'
import { HeartIcon as OutlinedHeartIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { Platform } from 'react-native'
import Constants from 'expo-constants'

const RestaurantHeader = ({ imageUrl, id }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const isFavorite = useSelector(state => selectIsFavorite(state, id));
  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <View>
      <Image
        source={{ uri: urlFor(imageUrl).url() }}
        className='w-full h-64 bg-gray-300 p-4'
        style={styles.image}
      />
      <TouchableOpacity
        className='absolute top-14 left-5 bg-gray-100 rounded-full p-2'
        onPress={navigation.goBack}
        activeOpacity={0.9}
      >
        <ArrowLeftIcon size={20} color="#00CCBB" />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.9} onPress={handleToggleFavorite} className='absolute top-14 right-5'>
        {isFavorite ? <HeartIcon size={26} fill="white" /> : <OutlinedHeartIcon size={26} stroke="white" />}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.select({
      'android': Constants.statusBarHeight
    })
  }
})

export default RestaurantHeader
