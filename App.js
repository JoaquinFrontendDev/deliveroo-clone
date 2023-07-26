import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/AppScreens/HomeScreen';
import "react-native-url-polyfill/auto"
import RestaurantScreen from '@screens/AppScreens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from './src/store/store'
import BasketScreen from '@screens/AppScreens/BasketScreen';
import PreparingOrderScreen from '@screens/AppScreens/PreparingOrderScreen';
import DeliveryScreen from '@screens/AppScreens/DeliveryScreen';
import LoginScreen from '@screens/AuthScreens/LoginScreen';
import SignUpScreen from '@screens/AuthScreens/SignUpScreen';
import ForgetPasswordScreen from '@screens/AuthScreens/ForgetPasswordScreen';
import LoadingScreen from '@screens/AuthScreens/LoadingScreen';
import MyAccountScreen from '@screens/AppScreens/MyAccountScreen';
import NavigationHeader from '@components/NavigationHeader/NavigationHeader';
import MyOrdersScreen from '@screens/AppScreens/MyOrdersScreen';
import FavoritesScreen from '@screens/AppScreens/FavoritesScreen';
import CategoryScreen from '@screens/AppScreens/CategoryScreen';
import FeaturedScreen from '@screens/AppScreens/FeaturedScreen';
import AllergyInfoScreen from '@screens/AppScreens/AllergyInfoScreen';
import DishDetailsScreen from '@screens/AppScreens/DishDetailsScreen';
import FAQsScreen from '@screens/AppScreens/FAQsScreen';

const Stack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator()

const Auth = () => (
  <Stack.Navigator
    screenOptions={{
      header: ({ navigation, route, options }) => (
        <NavigationHeader navigation={navigation} route={route} />
      )
    }}
  >
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
  </Stack.Navigator>
);

const Main = () => (
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
    <Stack.Screen name="DishDetail" component={DishDetailsScreen} options={{ presentation: 'modal', headerShown: false }} />
    <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen} options={{ presentation: 'fullScreenModal', headerShown: false }} />
    <Stack.Screen name="Delivery" component={DeliveryScreen} options={{ presentation: 'fullScreenModal', headerShown: false }} />
    <Stack.Screen name="MyAccount" component={MyAccountScreen} />
    <Stack.Screen name="MyOrders" component={MyOrdersScreen} />
    <Stack.Screen name="MyFavorites" component={FavoritesScreen} />
    <Stack.Screen name="FAQs" component={FAQsScreen} />
    <Stack.Screen name="AllergyInfo" component={AllergyInfoScreen} />
    <Stack.Screen name="Category" component={CategoryScreen} />
    <Stack.Screen name="Featured" component={FeaturedScreen} />
  </Stack.Navigator>
);

export default function App () {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen name="Loading" component={LoadingScreen} />
          <RootStack.Screen name="Auth" component={Auth} />
          <RootStack.Screen name="Main" component={Main} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
