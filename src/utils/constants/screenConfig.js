import { NAVIGATION } from './navigation'
import Splash from '../../screens/Splash'
import Login from '../../screens/Login'
import Home from '../../screens/Home'
import Authentication from '../../screens/Authentication'
import OTPAuthentication from '../../screens/OTPAuthentication'
import BiometricAuthentication from '../../screens/BiometricAuthentication'
import Success from '../../screens/Success'

export const screenConfig = {
  [NAVIGATION.SPLASH]: {
    component: Splash,
    options: { headerShown: false },
  },
  [NAVIGATION.LOGIN]: {
    component: Login,
    options: { headerShown: false },
  },
  [NAVIGATION.HOME]: {
    component: Home,
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
