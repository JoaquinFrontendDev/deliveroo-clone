import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import { useDispatch, useSelector } from 'react-redux';
import { selectFeaturedRestaurants, setFeaturedRestaurants } from '../../slices/restaurantsSlice';
import { fetchFeaturedRestaurants } from '../../services/sanityService';
import RestaurantCard from '../Restaurant/RestaurantCard/RestaurantCard';
import { useNavigation } from '@react-navigation/native';

const FeaturedRow = ({ id, title, description }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const restaurants = useSelector((state) =>
    selectFeaturedRestaurants(state, id)
  );

  useEffect(() => {
    fetchFeaturedRestaurants(id)
      .then((data) => {
        dispatch(setFeaturedRestaurants({ featuredId: id, restaurants: data.restaurants }));
      });
  }, [id, dispatch]);

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Featured', { featuredTitle: title, id, description })} activeOpacity={0.9}>
        <>
          <View className='mt-4 flex-row items-center justify-between px-4'>
            <Text className='font-bold text-lg'>{title}</Text>
            <ArrowRightIcon color="#00CCBB" />
          </View>
          <Text className='text-xs text-gray-500 px-4'>{description}</Text>
        </>
      </TouchableOpacity>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imageUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
            delivery_time={restaurant.delivery_time}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
