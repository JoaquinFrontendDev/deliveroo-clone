import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/AppScreens/HomeScreen';
import "react-native-url-polyfill/auto"
import RestaurantScreen from './screens/AppScreens/RestaurantScreen';
import { Provider, useDispatch, useSelector } from 'react-redux';
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

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Restaurant" component={RestaurantScreen} />
    <Stack.Screen name="Basket" component={BasketScreen}
      options={{ presentation: 'modal', headerShown: false }}
    />
    <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen}
      options={{ presentation: 'fullScreenModal', headerShown: false }}
    />
    <Stack.Screen name="Delivery" component={DeliveryScreen}
      options={{ presentation: 'fullScreenModal', headerShown: false }}
    />
  </Stack.Navigator>
);

export default function App () {
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        const { displayName, email, photoURL } = user;
        setUser({ displayName, email, photoUrl: photoURL });
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        {user ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </Provider>
  );
}
