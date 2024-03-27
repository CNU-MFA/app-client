import { View, Text } from 'react-native'
import { ATHENTICATION } from '../constants/Athentication'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const AthenticationScreen = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Text>{ATHENTICATION.TITLE}</Text>
      <Text>{ATHENTICATION.DESCRIPTION}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('OTPAthentication', {
            screen: 'OTPAthentication',
          })
        }
      >
        <Text>{ATHENTICATION.OTP_ATHENTICATION}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('BiometricAthentication', {
            screen: 'BiometricAthentication',
          })
        }
      >
        <Text>{ATHENTICATION.BIOMETRIC_ATHENTICATION}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AthenticationScreen
