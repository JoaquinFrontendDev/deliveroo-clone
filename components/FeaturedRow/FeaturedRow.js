import { View, Text, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurantsByCategory, setRestaurantsByCategory } from '../../slices/restaurantsSlice';
import { fetchRestaurantsByCategory } from '../../services/sanityService';

const FeaturedRow = ({ id, title, description }) => {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) =>
    selectRestaurantsByCategory(state, id)
  );

  useEffect(() => {
    fetchRestaurantsByCategory(id)
      .then((data) => {
        dispatch(setRestaurantsByCategory({ categoryId: id, restaurants: data.restaurants }));
      });
  }, [id, dispatch]);

  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>

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
