import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../../../sanity';
import { useNavigation } from '@react-navigation/native';


const CategoryCard = ({ imageUrl, title, category }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity className='relative mr-2' onPress={() => navigation.navigate('Category', { category })} activeOpacity={0.9}>
      <Image
        source={{ uri: urlFor(imageUrl).width(200).url() }}
        className='h-20 w-20 rounded'
      />
      <Text className='absolute bottom-1 left-1 text-white font-bold text-[11px] px-1'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard
