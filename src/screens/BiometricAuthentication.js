import { View } from 'react-native'
import { BIOMETRIC_AUTHENTICATION } from '../constants/biometricAuthentication'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/common/Header'
import { styles } from '../assets/styles/index'
import * as LocalAuthentication from 'expo-local-authentication'
import { useEffect } from 'react'
import API from '../api/API'
import { NAVIGATION } from '../constants/navigation'

const BiometricAuthentication = () => {
  const navigation = useNavigation()

  useEffect(() => {
    const authenticate = async () => {
      try {
        const res = await LocalAuthentication.authenticateAsync()
        console.log(res.success)
        // if (res.success) await API.postBiometricAuthentication(res.success)
        // navigation.navigate(NAVIGATION.SUCCESS)
      } catch (err) {
        console.log(err)
      }
    }
    authenticate()
  }, [])

  return (
    <View style={styles.container}>
      <Header text={BIOMETRIC_AUTHENTICATION.TITLE} />
    </View>
  )
}

export default BiometricAuthentication
