import { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { ADD_DEVICE } from '../constants/addDevice'
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
      <View style={styles.innerContainer}>
        <View style={addDeviceStyle.OTPCodeContainer}>
          <Text style={styles.OTPCode}>{OTPCode}</Text>
        </View>
        <View style={addDeviceStyle.descriptionContainer}>
          <Text style={styles.description}>{ADD_DEVICE.DESCRIPTION}</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Athentication', { screen: 'Athentication' })
          }
        >
          <Text>{ADD_DEVICE.SUBMIT}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddDeviceScreen

const addDeviceStyle = StyleSheet.create({
  OTPCodeContainer: {
    marginBottom: 42,
  },
  descriptionContainer: {
    marginBottom: 38,
  },
})
