import { styles } from '../assets/styles/index'
import { NAVIGATION } from '../utils/constants/navigation'
import { useEffect } from 'react'
import { View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from '../components/common/Header'
import * as LocalAuthentication from 'expo-local-authentication'

const BiometricAuthentication = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const user = route.params?.state

  useEffect(() => {
    const authenticate = async () => {
      try {
        const res = await LocalAuthentication.authenticateAsync()
        if (res.success) {
          const res = await API.postAuthBiometric(
            user.id,
            user.password,
            res.success,
          )
          const status = res.status
          
          if (status === 200) navigation.navigate(NAVIGATION.SUCCESS)
        }
      } catch (err) {
        console.log(err)
      }
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
