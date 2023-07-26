import { ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import { useSelector } from 'react-redux';
import { selectCategories } from '@slices/categoriesSlice';

const Categories = () => {
  const categories = useSelector(selectCategories)

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
    >
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imageUrl={category.image}
          title={category.name}
          category={category}
        />
      ))}
    </ScrollView>
  )
}

export default Categories
