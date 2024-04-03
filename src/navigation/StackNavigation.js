import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import AddDevice from '../screens/AddDevice'
import Authentication from '../screens/Authentication'
import OTPAuthentication from '../screens/OTPAuthentication'
import Success from '../screens/Success'
import BiometricAuthentication from '../screens/BiometricAuthentication'
import { NAVIGATION } from '../constants/navigation'

const Stack = createStackNavigator()

const screenConfig = {
  [NAVIGATION.LOGIN]: Home,
  // [NAVIGATION.ADD_DEVICE]: AddDevice,
  // [NAVIGATION.AUTHENTICATION]: Authentication,
  // [NAVIGATION.OTP_AUTHENTICATION]: OTPAuthentication,
  // [NAVIGATION.BIOMETRIC_AUTHENTICATION]: BiometricAuthentication,
  // [NAVIGATION.SUCCESS]: Success,
}

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NAVIGATION.ADD_DEVICE}>
        {Object.entries(screenConfig).map(([name, component]) => (
          <Stack.Screen key={name} name={name} component={component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation
