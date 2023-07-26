import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { XMarkIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { urlFor } from '../../../../sanity'

const DishDetailHeader = ({image}) => {
  const navigation = useNavigation()

  return (
    <View className='bg-white shadow-xs'>
      <Image source={{
        uri: urlFor(image).url(),
      }}
        className='w-full h-60'
      />
      <TouchableOpacity
        onPress={navigation.goBack}
        className='rounded-full bg-gray-100 absolute top-3 left-5 p-1'
        activeOpacity={0.9}
      >
        <XMarkIcon color="#00CCBB" size={25} />
      </TouchableOpacity>
    </View>
  )
}

export default DishDetailHeader
