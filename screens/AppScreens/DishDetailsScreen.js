import { View } from 'react-native'
import React from 'react'
import DishDetailHeader from '@components/DishDetail/DishDetailHeader/DishDetailHeader'
import DishDetailInfo from '@components/DishDetail/DishDetailInfo/DishDetailInfo'
import DishDetailButtons from '@components/DishDetail/DishDetailButtons/DishDetailButtons'

const DishDetailsScreen = ({ route }) => {
  const { id, name, description, price, image } = route.params

  return (
    <>
      <DishDetailHeader image={image} />
      <View className='flex-1 justify-between'>
        <DishDetailInfo name={name} description={description} />
        <DishDetailButtons price={price} id={id} description={description} image={image} name={name} />
      </View>
    </>
  )
}

export default DishDetailsScreen
