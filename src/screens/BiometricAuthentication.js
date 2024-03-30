import { View } from 'react-native'
import { BIOMETRIC_AUTHENTICATION } from '../constants/biometricAuthentication'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/common/Header'
import { styles } from '../assets/styles/index'

const BiometricAuthentication = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Header text={BIOMETRIC_AUTHENTICATION.TITLE} />
    </View>
  )
}

export default BiometricAuthentication
