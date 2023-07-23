import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/AppScreens/HomeScreen';
import "react-native-url-polyfill/auto"
import RestaurantScreen from './screens/AppScreens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from './store'
import BasketScreen from './screens/AppScreens/BasketScreen';
import PreparingOrderScreen from './screens/AppScreens/PreparingOrderScreen';
import DeliveryScreen from './screens/AppScreens/DeliveryScreen';
import LoginScreen from './screens/AuthScreens/LoginScreen';
import SignUpScreen from './screens/AuthScreens/SignUpScreen';
import ForgetPasswordScreen from './screens/AuthScreens/ForgetPasswordScreen';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebaseConfig';
import LoadingScreen from './screens/AuthScreens/LoadingScreen';
import MyAccountScreen from './screens/AppScreens/MyAccountScreen';
import UserDetailsScreen from './screens/AppScreens/UserDetailsScreen';
import NavigationHeader from './components/NavigationHeader/NavigationHeader';
import MyOrdersScreen from './screens/AppScreens/MyOrdersScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      header: ({ navigation, route, options }) => (
        <NavigationHeader navigation={navigation} route={route} />
      )
    }}
  >
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
  </Stack.Navigator>
);

const MainStack = () => (
  <Stack.Navigator
    screenOptions={{
      header: ({ navigation, route, options }) => (
        <NavigationHeader navigation={navigation} route={route} />
      )
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Restaurant" component={RestaurantScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Basket" component={BasketScreen} options={{ presentation: 'modal', headerShown: false }} />
    <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen} options={{ presentation: 'fullScreenModal', headerShown: false }} />
    <Stack.Screen name="Delivery" component={DeliveryScreen} options={{ presentation: 'fullScreenModal', headerShown: false }} />
    <Stack.Screen name="MyAccount" component={MyAccountScreen} />
    <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
    <Stack.Screen name="MyOrders" component={MyOrdersScreen} />
  </Stack.Navigator>
);

export default function App () {
  const [stateUser, setStateUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        const { displayName, email, photoURL } = user;
        setStateUser({ displayName, email, photoUrl: photoURL });
        setIsLoading(false)
      }
      setIsLoading(false)
    });
  }, [onAuthStateChanged]);

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        {stateUser ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </Provider>
  );
}
