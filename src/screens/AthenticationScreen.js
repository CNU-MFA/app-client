import { View, Text, StyleSheet } from 'react-native'
import { ATHENTICATION } from '../constants/athentication'
import AthenticationButton from '../components/AthenticationButton'
import Header from '../components/common/Header'
import { styles } from '../assets/styles'
import { NAVIGATION } from '../constants/navigation'

const authenticationConfig = {
  otpAuthentication: {
    name: NAVIGATION.OTP_ATHENTICATION,
    text: ATHENTICATION.OTP_ATHENTICATION,
  },
  biometricAuthentication: {
    name: NAVIGATION.BIOMETRIC_ATHENTICATION,
    text: ATHENTICATION.BIOMETRIC_ATHENTICATION,
  },
}

const AthenticationScreen = () => {
  return (
    <View style={styles.container}>
      <Header text={ATHENTICATION.TITLE} />
      <View style={styles.innerContainer}>
        <Text style={styles.description}>{ATHENTICATION.DESCRIPTION}</Text>
        <View style={athenticationStyles.container}>
          {Object.entries(authenticationConfig).map(([key, value]) => (
            <AthenticationButton
              key={key}
              name={value.name}
              text={value.text}
            />
          ))}
        </View>
      </View>
    </View>
  )
}

export default AthenticationScreen

const athenticationStyles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
})
