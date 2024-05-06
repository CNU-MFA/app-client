import { styles } from '../assets/styles'
import { AUTHENTICATION } from '../utils/constants/main'
import { View, Text, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'
import AuthenticationButton from '../components/AuthenticationButton'
import Header from '../components/common/Header'
import { NAVIGATION } from '../utils/constants/navigation'

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
  const route = useRoute()
  const user = route.params?.state

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
              user={user}
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
