// hooks/useUpdateUser.js
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '@slices/userSlice'
import { FIREBASE_AUTH } from '../firebaseConfig'

export const useUpdateUser = () => {
  const dispatch = useDispatch()

  const fetchUserData = async () => {
    const auth = FIREBASE_AUTH;
    if (!auth.currentUser) {
      throw new Error("No hay un usuario autenticado actualmente");
    }

    return {
      displayName: auth.currentUser.displayName,
      email: auth.currentUser.email,
      photoURL: auth.currentUser.photoURL
    };
  }

  const update = async () => {
    try {
      const userData = await fetchUserData()
      dispatch(setCurrentUser(userData))
    } catch (error) {
      console.error('Error updating user', error)
    }
  }

  return update
}
