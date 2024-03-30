import { View, Text, StyleSheet } from 'react-native'
import { AUTHENTICATION } from '../constants/authentication'
import AuthenticationButton from '../components/AuthenticationButton'
import Header from '../components/common/Header'
import { styles } from '../assets/styles'
import { NAVIGATION } from '../constants/navigation'

const authenticationConfig = {
  otpAuthentication: {
    name: NAVIGATION.OTP_AUTHENTICATION,
    text: AUTHENTICATION.OTP_AUTHENTICATION,
  },
  biometricAuthentication: {
    name: NAVIGATION.BIOMETRIC_AUTHENTICATION,
    text: AUTHENTICATION.BIOMETRIC_AUTHENTICATION,
  },
}

const Authentication = () => {
  return (
    <View style={styles.container}>
      <Header text={AUTHENTICATION.TITLE} />
      <View style={styles.innerContainer}>
        <Text style={styles.description}>{AUTHENTICATION.DESCRIPTION}</Text>
        <View style={authenticationStyles.container}>
          {Object.entries(authenticationConfig).map(([key, value]) => (
            <AuthenticationButton
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

export default Authentication

const authenticationStyles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
})
