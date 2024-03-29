import { View, Text, TextInput } from 'react-native'
import { OTP_ATHENTICATION } from '../constants/OTPAthentication'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const OTPAthentication = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Text>{OTP_ATHENTICATION.TITLE}</Text>
      <Text>{OTP_ATHENTICATION.DESCRIPTION}</Text>
      <View>
        <TextInput placeholder={OTP_ATHENTICATION.OTP_PLACEHOLDER} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('인증 완료')}>
        <Text>{OTP_ATHENTICATION.SUBMIT}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OTPAthentication
