import { View, Text } from 'react-native'
import React from 'react'
import UserAvatar from '../../UserAvatar/UserAvatar'
import { PlusCircleIcon } from 'react-native-heroicons/solid'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '@slices/userSlice'
import { useUploadImage } from '@hooks/useUploadImage'

const AccountHeader = () => {
  const currentUser = useSelector(selectCurrentUser)
  const { pickImage } = useUploadImage()

  return (
    <View className='w-full px-[20px] flex-row items-center justify-between'>
      <View className='flex-row space-x-2 items-center'>
        <UserAvatar />
        <Text className='text-lg font-bold'>{`Hello, ${ currentUser.firstName }`}</Text>
      </View>
      <View className='flex-row space-x-1 items-center'>
        <PlusCircleIcon size={20} color="#4EC0BB" onPress={pickImage} />
        <Text className='text-md text-[#4EC0BB]'>
          {`${ currentUser.photoURL ? 'Change photo' : 'Upload photo' }`}
        </Text>
      </View>
    </View>
  )
}

export default AccountHeader
