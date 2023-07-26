import { SafeAreaView, Platform, StyleSheet } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import HomeHeader from '@components/Home/HomeHeader/HomeHeader'
import HomeSearchAndFilters from '@components/Home/HomeSearchAndFilters/HomeSearchAndFilters'
import HomeMain from '@components/Home/HomeMain/HomeMain'

const HomeScreen = () => {

  return (
    <SafeAreaView style={style.container}>
      <HomeHeader />
      <HomeSearchAndFilters />
      <HomeMain />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    marginTop: Platform.select({
      android: Constants.statusBarHeight
    }),
    marginBottom: 40
  }
})

export default HomeScreen
