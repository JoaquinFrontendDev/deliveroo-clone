import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';

const RestaurantCard = ({
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
}) => {
  return (
    <TouchableOpacity className='bg-white mr-3 shadow'>
      <Image source={{ uri: imageUrl }} className='h-36 w-64 rounded-sm' />
      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{title}</Text>
        <View className='flex-row items-center space-x-1'>
          <StarIcon color="green" opacity={0.5} size={22} />
          <View className='text-xs text-gray-500 flex-row space-x-2'>
            <Text className='text-green-500'>{rating}</Text>
            <Text>{genre}</Text>
          </View>
        </View>
        <View className='flex-row items-center space-x-1'>
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className='text-xs text-gray-500'>Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
