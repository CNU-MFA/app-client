import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import AddDevice from '../screens/AddDevice'
import Athentication from '../screens/Athentication'
import OTPAthentication from '../screens/OTPAthentication'
import Success from '../screens/Success'
import BiometricAthentication from '../screens/BiometricAthentication'
import { NAVIGATION } from '../constants/navigation'

const Stack = createStackNavigator()

const screenConfig = {
  [NAVIGATION.LOGIN]: Home,
  [NAVIGATION.ADD_DEVICE]: AddDevice,
  [NAVIGATION.ATHENTICATION]: Athentication,
  [NAVIGATION.OTP_ATHENTICATION]: OTPAthentication,
  [NAVIGATION.BIOMETRIC_ATHENTICATION]: BiometricAthentication,
  [NAVIGATION.SUCCESS]: Success,
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
