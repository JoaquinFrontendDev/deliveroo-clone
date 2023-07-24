import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import TextInputField from '../../components/TextInputField/TextInputField'
import { useSelector } from 'react-redux'
import { selectCurrentUser, setCurrentUser } from '../../slices/userSlice'
import { selectCurrentCity } from '../../slices/currentCitySlice'
import UserAvatar from '../../components/UserAvatar/UserAvatar'
import { PlusCircleIcon } from 'react-native-heroicons/solid'
import { useUploadImage } from '../../hooks/useUploadImage'
import MapView, { Marker } from 'react-native-maps'
import { FIREBASE_AUTH } from '../../firebaseConfig'
import { updateProfile } from 'firebase/auth'
import { showToast } from '../../components/Toaster/showToast'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import { toastConfig } from '../../components/Toaster/toastConfig'
import { Keyboard } from 'react-native';
import { useUpdateUser } from '../../hooks/useUpdateUser'
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader'

const UserDetailsScreen = () => {
  const currentUser = useSelector(selectCurrentUser)
  const currentCity = useSelector(selectCurrentCity)
  const { pickImage } = useUploadImage()
  const auth = FIREBASE_AUTH
  const { updateUser } = useUpdateUser()

  const initialValues = {
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    userEmail: currentUser.email,
    displayName: currentUser.displayName,
  }

  const firebaseFieldsMap = {
    firstName: "displayName",
    lastName: "displayName",
    userEmail: "email",
  };

  const handleSubmit = async (values) => {
    Keyboard.dismiss()
    let updateObject = {};
    let displayNameChanged = false;

    for (let field in initialValues) {
      if (initialValues[field] !== values[field]) {
        const firebaseField = firebaseFieldsMap[field] || field;
        if (firebaseField === "displayName") {
          displayNameChanged = true;
        } else {
          updateObject[firebaseField] = values[field];
        }
      }
    }

    if (displayNameChanged) {
      updateObject["displayName"] = `${ values.firstName } ${ values.lastName }`;
    }
    await updateProfile(auth.currentUser, updateObject)
      .then(() => {
        showToast('success', 'userUpload')
      })
      .catch((error) => {
        showToast('error', 'userUpload')
      });

    updateUser();
  };



  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} >
      {({ handleSubmit: formikSubmit }) => (
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 50, backgroundColor: 'white', paddingHorizontal: 18 }}>
          <View>
            <View className='flex-1 space-y-6'>
              <View className='w-full justify-between items-center flex-row'>
                <UserAvatar size='big' isEditable />
                <View className='flex-row space-x-1 items-center'>
                  <PlusCircleIcon size={20} color="#4EC0BB" onPress={pickImage} />
                  <Text className='text-md text-[#4EC0BB]'>
                    {`Change photo`}
                  </Text>
                </View>
              </View>
              <View>
                <TextInputField
                  autoFocus={true}
                  name='firstName'
                  label='First name'
                  isEditable
                />
              </View>
              <View>
                <TextInputField
                  name='lastName'
                  label='Last name'
                  isEditable
                />
              </View>
              <View>
                <TextInputField
                  name='userEmail'
                  label='Email'
                  isEditable
                />
              </View>
            </View>
            <View className='flex-1 mt-6'>
              <Text className='text-xl font-bold'>Location</Text>
              <MapView
                initialRegion={{
                  latitude: Number(currentCity.latitude),
                  longitude: Number(currentCity.longitude),
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005
                }}
                className='w-full h-[280px] mt-2 z-0'
                mapType='mutedStandard'
              >
                <Marker
                  coordinate={{
                    latitude: Number(currentCity.latitude),
                    longitude: Number(currentCity.longitude),
                  }}
                  title={currentCity.city}
                  identifier='origin'
                  pinColor='#00CCBB'
                />
              </MapView>
            </View>
          </View>

          <TouchableOpacity
            className={`bg-primary mx-6 py-3 items-center justify-center rounded-md absolute bottom-10 w-full ease-in-out transition-opacity duration-350 ${ currentUser.isEditing ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-1/2' }`}
            onPress={formikSubmit}
            activeOpacity={0.9}
          >
            <Text className='text-white font-bold text-base'>Save changes</Text>
          </TouchableOpacity>
          <Toast config={toastConfig} />
        </ScrollView>
      )}
    </Formik>
  )
}

export default UserDetailsScreen
