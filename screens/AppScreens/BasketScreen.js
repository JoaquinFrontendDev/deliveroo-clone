import { View, SafeAreaView, StyleSheet } from 'react-native'
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectBasketItems } from '../../slices/basketSlice'
import Constants from 'expo-constants'
import { setUserLastOrder } from '../../slices/userSlice'
import BasketFooter from '../../components/Basket/BasketFooter/BasketFooter'
import BasketHeader from '../../components/Basket/BasketHeader/BasketHeader'
import BasketMain from '../../components/Basket/BasketMain/BasketMain'
import useGroupedBasketItems from '../../hooks/useGroupedBasketItems'

const BasketScreen = () => {

  useGroupedBasketItems()

  return (
    <SafeAreaView style={styles.container} className='flex-1 bg-white'>
      <View className='flex-1 bg-gray-100'>
        {/* Header */}
        <BasketHeader />

        {/* Main */}
        <BasketMain />

        {/* Footer */}
        <BasketFooter />
      </View>
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

export default BasketScreen
