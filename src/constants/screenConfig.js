import Home from '../screens/Home'
import Splash from '../screens/Splash'
import AddDevice from '../screens/AddDevice'
import Authentication from '../screens/Authentication'
import OTPAuthentication from '../screens/OTPAuthentication'
import Success from '../screens/Success'
import BiometricAuthentication from '../screens/BiometricAuthentication'

import { NAVIGATION } from './navigation'

export const screenConfig = {
  [NAVIGATION.SPLASH]: {
    component: Splash,
    options: { headerShown: false },
  },
  [NAVIGATION.LOGIN]: {
    component: Home,
    options: { headerShown: false },
  },
  [NAVIGATION.ADD_DEVICE]: {
    component: AddDevice,
    options: { headerShown: false },
  },
  [NAVIGATION.AUTHENTICATION]: {
    component: Authentication,
    options: { headerShown: false },
  },
  [NAVIGATION.OTP_AUTHENTICATION]: {
    component: OTPAuthentication,
    options: { headerShown: true },
  },
  [NAVIGATION.BIOMETRIC_AUTHENTICATION]: {
    component: BiometricAuthentication,
    options: { headerShown: true },
  },
  [NAVIGATION.SUCCESS]: {
    component: Success,
    options: { headerShown: false },
  },
}
