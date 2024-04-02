import { View } from 'react-native'
import { BIOMETRIC_AUTHENTICATION } from '../constants/biometricAuthentication'
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from '../components/common/Header'
import { styles } from '../assets/styles/index'
import * as LocalAuthentication from 'expo-local-authentication'
import { useEffect } from 'react'
import API from '../api/API'
import { NAVIGATION } from '../constants/navigation'

const BiometricAuthentication = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const { id, password } = useRoute()

  useEffect(() => {
    const authenticate = async () => {
      try {
        const res = await LocalAuthentication.authenticateAsync()
        console.log(res.success)
        // if (res.success) await API.postBiometricAuthentication(id, password, res.success)
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
