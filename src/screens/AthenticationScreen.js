import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ATHENTICATION } from '../constants/athentication'
import AthenticationButton from '../components/AthenticationButton'
import Header from '../components/Header'
import { styles } from '../assets/styles'
import { NAVIGATION } from '../constants/navigation'

const AthenticationScreen = () => {
  const navigation = useNavigation()

  const athentication = {
    otp: {
      key: 1,
      name: NAVIGATION.OTP_ATHENTICATION,
      text: ATHENTICATION.OTP_ATHENTICATION,
    },
    biometricAthentication: {
      key: 2,
      name: NAVIGATION.BIOMETRIC_ATHENTICATION,
      text: ATHENTICATION.BIOMETRIC_ATHENTICATION,
    },
  }

  const navigateScreenHandler = () => {
    navigation.navigate('OTP 인증')
  }

  return (
    <View style={styles.container}>
      <Header text={ATHENTICATION.TITLE} />
      <View style={styles.innerContainer}>
        <Text style={styles.description}>{ATHENTICATION.DESCRIPTION}</Text>
        <TouchableOpacity onPress={navigateScreenHandler}>
          <Text>{ATHENTICATION.OTP_ATHENTICATION}</Text>
        </TouchableOpacity>
        {/* {Object.entries(athentication).map(([key, value]) => (
        <AthenticationButton
          key={key}
          screen={value.screen}
          text={value.text}
        />
      ))} */}
      </View>
    </View>
  )
}

export default AthenticationScreen
