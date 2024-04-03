import { styles } from '../assets/styles'
import { ADD_DEVICE } from '../constants/main'
import { ERROR } from '../constants/messages'
import { NAVIGATION } from '../constants/navigation'
import { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { generateOTPCode } from '../utils/generateOTPCode'
import Header from '../components/common/Header'
import Button from '../components/common/Button'
import API from '../api/API'

const AddDevice = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { id, password } = route.params?.state
  const [otp, setOtp] = useState('')

  const handleRequestSetOTP = async (otp) => {
    await API.postSetOTP(otp)
  }

  useEffect(() => {
    const handleRequestOTP = async () => {
      const otp = generateOTPCode()
      setOtp(otp)
      await handleRequestSetOTP(otp)
    }
    handleRequestOTP()
  }, [])

  const displayDeviceError = () => {
    alert(ERROR.ADD_DEVICE_PROMPT_MESSAGE)
  }

  const handleVerifyDeviceStatus = (res) => {
    if (res.ok)
      navigation.navigate(NAVIGATION.AUTHENTICATION, { state: { ...user } })
  }

  const onPress = async () => {
    const res = await API.postVerifyDeviceStatus(id, password)
    handleVerifyDeviceStatus(res)
    displayDeviceError()
  }

  return (
    <View style={styles.container}>
      <Header text={ADD_DEVICE.TITLE} />
      <View style={styles.innerContainer}>
        <View style={addDeviceStyles.OTPCodeContainer}>
          <Text style={addDeviceStyles.OTPCode}>{otp}</Text>
        </View>
        <View style={addDeviceStyles.descriptionContainer}>
          <Text style={styles.description}>{ADD_DEVICE.DESCRIPTION}</Text>
        </View>
        <Button size={80} onPress={onPress} text={ADD_DEVICE.SUBMIT} />
      </View>
    </View>
  )
}

export default AddDevice

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
