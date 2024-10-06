import { styles } from '../assets/styles'
import { View, Text, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'
import AuthenticationButton from '../components/AuthenticationButton'
import Header from '../components/common/Header'
import { NAVIGATION } from '../utils/constants/navigation'

const authenticationConfig = {
  otpAuthentication: {
    name: NAVIGATION.OTP_AUTHENTICATION,
    text: 'OTP 인증',
  },
  biometricAuthentication: {
    name: NAVIGATION.BIOMETRIC_AUTHENTICATION,
    text: '생체(지문) 인증',
  },
}

const Authentication = () => {
  const route = useRoute()
  const user = route.params?.state

  return (
    <View style={styles.container}>
      <Header text="2차 인증 서비스" />
      <View style={styles.innerContainer}>
        <Text style={styles.description}>
          {'아래에서 인증 방법을 선택한 후\n 2차 인증을 진행해주세요.'}
        </Text>
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
