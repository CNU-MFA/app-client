import { NAVIGATION } from '../constants/navigation'
import { AUTHENTICATION } from '../constants/main'

export const authenticationConfig = {
  otpAuthentication: {
    name: NAVIGATION.OTP_AUTHENTICATION,
    text: AUTHENTICATION.OTP_AUTHENTICATION,
  },
  biometricAuthentication: {
    name: NAVIGATION.BIOMETRIC_AUTHENTICATION,
    text: AUTHENTICATION.BIOMETRIC_AUTHENTICATION,
  },
}
