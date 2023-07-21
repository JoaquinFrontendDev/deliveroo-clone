import React from 'react';
import { Text, View } from 'react-native';
import { FIREBASE_AUTH } from '../../firebaseConfig';

function Avatar () {
  const auth = FIREBASE_AUTH
  const firstLetter = auth && auth?.currentUser?.displayName?.split(' ')[0].charAt(0).toUpperCase();

  return (
    <View className='items-center justify-center rounded-full bg-[#00CCBB] w-8 h-8 my-4'>
      <Text className='text-xl text-white font-bold'>{firstLetter || 'J'}</Text>
    </View>
  );
}

export default Avatar;
