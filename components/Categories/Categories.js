import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient, { urlFor } from '../../sanity';

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "category"]
    `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);


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
          title={category.title}
        />
      ))}
    </ScrollView>
  )
}

export default Categories
