import { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { ADD_DEVICE } from '../constants/AddDevice'
import { generateOTPCode } from '../utils/generateOTPCode'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../assets/styles'
import Header from '../components/Header'

const AddDeviceScreen = () => {
  const navigation = useNavigation()
  const [OTPCode, setOTPCode] = useState()

  useEffect(() => {
    setOTPCode(generateOTPCode())
  }, [])

  return (
    <View style={styles.container}>
      <Header text={ADD_DEVICE.TITLE} />
      <Text>{OTPCode}</Text>
      <Text>{ADD_DEVICE.DESCRIPTION}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Athentication', { screen: 'Athentication' })
        }
      >
        <Text>{ADD_DEVICE.SUBMIT}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddDeviceScreen
