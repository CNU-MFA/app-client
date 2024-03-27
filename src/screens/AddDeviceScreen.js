import { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { ADD_DEVICE } from '../constants/AddDevice'
import { generateOTPCode } from '../utils/generateOTPCode'
import { useNavigation } from '@react-navigation/native'
useNavigation

const AddDeviceScreen = () => {
  const navigation = useNavigation()
  const [OTPCode, setOTPCode] = useState()

  useEffect(() => {
    setOTPCode(generateOTPCode())
  }, [])

  return (
    <View>
      <Text>{ADD_DEVICE.TITLE}</Text>
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
