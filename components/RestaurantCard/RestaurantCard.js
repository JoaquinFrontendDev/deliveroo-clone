import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { HeartIcon, StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon, HeartIcon as OutlinedHeartIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../../sanity';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant, setRestaurant } from '../../slices/restaurantSlice';
import { selectIsFavorite, toggleFavorite } from '../../slices/restaurantsSlice';

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
  lat,
  delivery_time,
  onFavoriteScreen
}) => {

  const navigation = useNavigation()
  const dispatch = useDispatch()
  const selectedRestaurant = useSelector(selectRestaurant)
  const isFavorite = useSelector(state => selectIsFavorite(state, id));

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  useEffect(() => {
    dispatch(setRestaurant({
      id,
      imageUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
      delivery_time,
    }))
  }, [])

  return (
    <TouchableOpacity
      className={`bg-white rounded-md border-gray-300 ${ onFavoriteScreen ? 'mr-0 shadow-lg' : 'mr-3 shadow' }`}
      onPress={() => navigation.navigate('Restaurant', {
        id,
        imageUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
        delivery_time,
      })}
    >
      <Image
        source={{ uri: urlFor(imageUrl).url() }}
        className={`rounded-t-md object-center ${ onFavoriteScreen ? 'w-full h-52' : 'h-36 w-72' }`}
        resizeMode='cover'
      />
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
      <View className='absolute bottom-[80px] right-4 bg-white py-2 px-6 rounded-full shadow-md items-center justify-center'>
        <Text className='font-bold'>{delivery_time}</Text>
        <Text className='text-gray-400 text-xs font-bold'>min</Text>
      </View>
      <TouchableOpacity activeOpacity={0.9} onPress={handleToggleFavorite} className='absolute top-2 right-2'>
        {isFavorite ? <HeartIcon size={26} fill="white" /> : <OutlinedHeartIcon size={26} stroke="white" />}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
