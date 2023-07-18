import { ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
    >
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Sample title"/>
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Sample title"/>
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Sample title"/>
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Sample title"/>
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Sample title"/>
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Sample title"/>
    </ScrollView>
  );
};

export default Categories;
