import { View, Text } from 'react-native'
import { ATHENTICATION } from '../constants/Athentication'
import AthenticationButton from '../components/AthenticationButton'

const AthenticationScreen = () => {
  const athentication = {
    otp: {
      key: 1,
      screen: 'OTPAthentication',
      text: ATHENTICATION.OTP_ATHENTICATION,
    },
    biometricAthentication: {
      key: 2,
      screen: 'BiometricAthentication',
      text: ATHENTICATION.BIOMETRIC_ATHENTICATION,
    },
  }

  return (
    <View>
      <Text>{ATHENTICATION.TITLE}</Text>
      <Text>{ATHENTICATION.DESCRIPTION}</Text>
      {Object.entries(athentication).map(([key, value]) => (
        <AthenticationButton
          key={key}
          screen={value.screen}
          text={value.text}
        />
      ))}
    </View>
  )
}

export default AthenticationScreen
