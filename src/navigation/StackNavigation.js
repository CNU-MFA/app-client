import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import AddDeviceScreen from '../screens/AddDeviceScreen'
import AthenticationScreen from '../screens/AthenticationScreen'
import OTPAthenticationScreen from '../screens/OTPAthenticationScreen'
import SuccessScreen from '../screens/SuccessScreen'

const Stack = createStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddDevice" component={AddDeviceScreen} />
        <Stack.Screen name="Athentication" component={AthenticationScreen} />
        <Stack.Screen
          name="OTPAthentication"
          component={OTPAthenticationScreen}
        />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation
