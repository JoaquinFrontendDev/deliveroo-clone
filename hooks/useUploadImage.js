import { useState } from 'react'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { updateProfile } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import * as ImagePicker from 'expo-image-picker'
import uuid from 'react-native-uuid'
import { FIREBASE_AUTH, FIREBASE_STORAGE } from '../firebaseConfig'
import { useUpdateUser } from './useUpdateUser'
import { showToast } from '../components/Toaster/showToast'

export const useUploadImage = () => {
  const [userImage, setUserImage] = useState(null)
  const dispatch = useDispatch()
  const auth = FIREBASE_AUTH
  const storage = FIREBASE_STORAGE
  const updateUser = useUpdateUser()


  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.canceled) {
      setUserImage(result.uri)
      uploadImage(result.uri)
    }
  }

  const uploadImage = async (uri) => {
    const response = await fetch(uri)
    const blob = await response.blob()
    const uniqueId = uuid.v4()
    const storageRef = ref(storage, `/images/${ uniqueId }`)

    try {
      showToast('info', 'imageUpload')
      const snapshot = await uploadBytes(storageRef, blob)
      const updatedImageUrl = await getDownloadURL(snapshot.ref)
      await updateProfile(auth.currentUser, { photoURL: updatedImageUrl })
      console.log('Profile image updated correctly:', updatedImageUrl)

      updateUser().finally(() => {
        showToast('success', 'imageUpload')
      })
    } catch (error) {
      showToast('error', 'imageUpload')
    }
  }

  return { userImage, pickImage }
}
