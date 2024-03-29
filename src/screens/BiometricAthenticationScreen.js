import { View } from 'react-native'
import { BIOMETRIC_ATHENTICATION } from '../constants/biometricAthentication'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/common/Header'
import { styles } from '../assets/styles/index'

const BiometricAthenticationScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Header text={BIOMETRIC_ATHENTICATION.TITLE} />
    </View>
  )
}

export default BiometricAthenticationScreen
