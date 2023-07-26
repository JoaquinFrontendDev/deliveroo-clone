import { View } from 'react-native'
import React from 'react'
import MyAccountOptions from '../../../constants/MyAccountOptions'
import MyAccountItem from '../../MyAccountItem/MyAccountItem'
import SignOutButton from '../SignOutButton/SignOutButton'

const AccountMain = () => {
  return (
    <View className='flex-1 w-full mt-4 flex-col space-y-2'>
      {MyAccountOptions.map((option, index) => (
        <View key={index}>
          <MyAccountItem
            icon={option.icon}
            label={option.label}
            footerText={option.footerText}
            redirectionUrl={option.redirectionUrl}
          />
        </View>
      ))}
      <SignOutButton />
    </View>
  )
}

export default AccountMain
