import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import AddDeviceScreen from '../screens/AddDeviceScreen'
import AthenticationScreen from '../screens/AthenticationScreen'
import OTPAthenticationScreen from '../screens/OTPAthenticationScreen'
import SuccessScreen from '../screens/SuccessScreen'
import BiometricAthenticationScreen from '../screens/BiometricAthenticationScreen'
import { NAVIGATION } from '../constants/navigation'

const Stack = createStackNavigator()

const screenConfig = {
  [NAVIGATION.LOGIN]: HomeScreen,
  [NAVIGATION.ADD_DEVICE]: AddDeviceScreen,
  [NAVIGATION.ATHENTICATION]: AthenticationScreen,
  [NAVIGATION.OTP_ATHENTICATION]: OTPAthenticationScreen,
  [NAVIGATION.BIOMETRIC_ATHENTICATION]: BiometricAthenticationScreen,
  [NAVIGATION.SUCCESS]: SuccessScreen,
}

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NAVIGATION.LOGIN}>
        {Object.entries(screenConfig).map(([name, component]) => (
          <Stack.Screen key={name} name={name} component={component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation
