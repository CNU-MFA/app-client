import { styles } from '../assets/styles/index'
import { NAVIGATION } from '../utils/constants/navigation'
import { useEffect } from 'react'
import { View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from '../components/common/Header'
import * as LocalAuthentication from 'expo-local-authentication'
import API from '../apis/API'

const BiometricAuthentication = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { user } = route.params

  useEffect(() => {
    const authenticate = async () => {
      const res = await LocalAuthentication.authenticateAsync()
      const response = await API.postAuthBiometric(
        user.id,
        user.password,
        res.success,
      )
      if (response.status === 200)
        navigation.navigate(NAVIGATION.SUCCESS, {
          user: { id: user.id, password: user.password },
        })
    }
    authenticate()
  }, [])

  return (
    <View style={styles.container}>
      <Header text="생체 인증" />
    </View>
  )
}

export default BiometricAuthentication
