import { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { ADD_DEVICE } from '../constants/addDevice'
import { generateOTPCode } from '../utils/generateOTPCode'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../assets/styles'
import Header from '../components/common/Header'
import Button from '../components/common/Button'
import { NAVIGATION } from '../constants/navigation'

const AddDeviceScreen = () => {
  const navigation = useNavigation()
  const [OTPCode, setOTPCode] = useState()

  useEffect(() => {
    setOTPCode(generateOTPCode())
  }, [])

  const onPress = () => {
    navigation.navigate(NAVIGATION.ATHENTICATION)
  }

  return (
    <View style={styles.container}>
      <Header text={ADD_DEVICE.TITLE} />
      <View style={styles.innerContainer}>
        <View style={addDeviceStyles.OTPCodeContainer}>
          <Text style={addDeviceStyles.OTPCode}>{OTPCode}</Text>
        </View>
        <View style={addDeviceStyles.descriptionContainer}>
          <Text style={styles.description}>{ADD_DEVICE.DESCRIPTION}</Text>
        </View>
        <Button size={80} onPress={onPress} text={ADD_DEVICE.SUBMIT} />
      </View>
    </View>
  )
}

export default AddDeviceScreen

const addDeviceStyles = StyleSheet.create({
  OTPCodeContainer: {
    marginBottom: 42,
  },
  OTPCode: {
    fontSize: 42,
    fontWeight: '700',
    textAlign: 'center',
  },
  descriptionContainer: {
    marginBottom: 38,
  },
})
