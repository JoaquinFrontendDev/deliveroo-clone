import { SafeAreaView, Text, StyleSheet } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'


const PreparingOrderScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery')
    }, 5000)
  }, [])

  return (
    <SafeAreaView style={styles.container} className='bg-primary flex-1 justify-center items-center'>
      <Animatable.Image
        source={require('../../assets/orderLoding.gif')}
        animation="slideInUp"
        iterationCount={1}
        className='w-96 h-96'
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className='text-lg my-10 text-white font-bold text-center'
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.select({
      'android': Constants.statusBarHeight
    })
  }
})

export default PreparingOrderScreen
