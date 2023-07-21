import * as Location from 'expo-location';

export async function useCurrentCity () {
  try {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
    let response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${ location.coords.latitude }&lon=${ location.coords.longitude }`);
    let data = await response.json();
    const currentCity = data.address.city
    return currentCity
  } catch (error) {
    console.error(error);
  }

}
