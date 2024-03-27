import { View, Text } from 'react-native'
import { BIOMETRIC_ATHENTICATION } from '../constants/BiometricAthentication'
import { useNavigation } from '@react-navigation/native'

const BiometricAthenticationScreen = () => {
  const navigation = useNavigation()
  
  return (
    <View>
      <Text>{BIOMETRIC_ATHENTICATION.TITLE}</Text>
    </View>
  )
}

export default BiometricAthenticationScreen
