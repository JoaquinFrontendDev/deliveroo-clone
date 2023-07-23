import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../slices/userSlice'
import { urlFor } from '../../sanity'
import { formatPrice } from '../../utils/formatPrice'

const MyOrdersScreen = () => {
  const currentUser = useSelector(selectCurrentUser)

  if (!currentUser.lastOrder.length) {
    return <Text>No Orders yet</Text>
  }

  if (currentUser.lastOrder) {
    return (
      <ScrollView className='divide-y divide-gray-200'>
        <View className='space-y-2'>
          <Text>Last Order</Text>
          {currentUser.lastOrder && currentUser.lastOrder.flat().map((item) => (
            <View key={item.id} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
              <Text className='text-[#4EC0BB] '>{item.count} x</Text>
              <Image
                source={{ uri: urlFor(item.image).url() }}
                className='h-12 w-12 rounded-full'
              />
              <Text className='flex-1'>{item.name}</Text>
              <Text className='text-gray-600'>
                {formatPrice(item.price)}
              </Text>

              <TouchableOpacity>
                <Text
                  className='text-[#4EC0BB] text-xs'
                  onPress={() => dispatch(removeFromBasket({ id: item.id }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    )
  }
}

export default MyOrdersScreen
