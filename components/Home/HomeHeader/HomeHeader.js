import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentCity, setCurrentCity } from '../../../slices/currentCitySlice'
import { ChevronDownIcon, MapPinIcon, UserIcon } from 'react-native-heroicons/outline'
import UserAvatar from '../../UserAvatar/UserAvatar'
import { useNavigation } from '@react-navigation/native'
import { useCurrentCity } from '../../../hooks/useCurrentCity'
import { useUpdateUser } from '../../../hooks/useUpdateUser'
import { fetchAllRestaurants } from '../../../services/sanityService'
import { setAllRestaurants } from '../../../slices/restaurantsSlice'

const HomeHeader = () => {
  const currentCity = useSelector(selectCurrentCity)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const updateUser = useUpdateUser()

  useEffect(() => {
    const getCurrentCity = async () => {
      const { currentCity, latitude, longitude } = await useCurrentCity()
      dispatch(setCurrentCity({ currentCity, latitude, longitude }))
    }

    getCurrentCity()
    updateUser()
    fetchAllRestaurants()
      .then((data) => {
        dispatch(setAllRestaurants(data))
      })
  }, [])

  return (
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
  )
}

export default HomeHeader
