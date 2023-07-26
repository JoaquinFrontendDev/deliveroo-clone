import { Image, SafeAreaView, Text } from 'react-native'
import React, { useEffect } from 'react'
import * as Progress from 'react-native-progress'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setCurrentUser } from '@slices/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../../firebaseConfig';

export default function LoadingScreen () {

  const navigation = useNavigation();
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        const { displayName, email, photoURL } = user;
        dispatch(setCurrentUser({displayName, email, photoURL}))

        navigation.reset({
          index: 0,
          routes: [{ name: 'Main' }],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Auth' }],
        });
      }
    });
  }, []);

  return (
    <SafeAreaView className='bg-white flex-1 justify-center items-center'>
      <Image
        source={require('@assets/deliveroo-logo.png')}
        className='w-72 h-72'
      />
      <Text className='text-xl px-6 mt-10 text-[#4EC0BB] font-bold text-center'>
        Just a second...
      </Text>
      <Text className='text-xl px-6 text-[#4EC0BB] mb-10 font-bold text-center'>
        We are checking your credentials
      </Text>
      <Progress.Bar size={60} indeterminate={true} color="#4EC0BB" />
    </SafeAreaView>
  )
}
