import React from 'react';
import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../slices/userSlice';

function UserAvatar () {
  const currentUser = useSelector(selectCurrentUser)

  if (currentUser && currentUser.photoURL) {
    return (
      <Image
        source={{ uri: currentUser.photoURL }}
        className='h-8 w-8 bg-gray-300 my-4 p-4 rounded-full' />
    )
  } else if (currentUser) {
    return (
      <View className='items-center justify-center rounded-full bg-[#4EC0BB] w-8 h-8 my-4'>
        <Text className='text-xl text-white font-bold'>{currentUser.userFirstLetter}</Text>
      </View>
    )
  } else {
    return null;
  }
}

export default UserAvatar;

