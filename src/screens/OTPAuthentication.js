import { styles } from '../assets/styles/index'
import { OTP_AUTHENTICATION } from '../utils/constants/main'
import { NAVIGATION } from '../utils/constants/navigation'
import { ERROR } from '../utils/constants/messages'
import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from '../components/common/Header'
import Input from '../components/common/Input'
import Button from '../components/common/Button'
import API from '../apis/API'

const OTPAuthentication = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const [inputOTP, setInputOTP] = useState('')
  // const { id, password } = route.params?.state

  const onChangeText = (text) => {
    setInputOTP(text)
  }

  const isInputOTP = () => {
    return inputOTP === ''
  }

  const handleSuccessfulVerifyOTPAuthentication = async () => {
    if (res.ok) navigation.navigate(NAVIGATION.SUCCESS)
  }

  const onPress = async () => {
    if (isInputOTP()) {
      alert(ERROR.INPUT_OTP_ATHENTICATION_PROMPT_MESSAGE)
      return
    }
    const res = await API.postAuthOTP(inputOTP)
    handleSuccessfulVerifyOTPAuthentication(res)
    alert(ERROR.INVALID_OTP_ATHENTICATION_PROMPT_MESSAGE)
  }

  return (
    <View style={styles.container}>
      <Header text={OTP_AUTHENTICATION.TITLE} />
      <View style={styles.innerContainer}>
        <Text style={styles.description}>{OTP_AUTHENTICATION.DESCRIPTION}</Text>
        <View style={OTPAuthenticationStyles.container}>
          <View style={OTPAuthenticationStyles.inputContainer}>
            <Input
              keyboardType="number-pad"
              onChangeText={onChangeText}
              value={inputOTP}
              placeholder={OTP_AUTHENTICATION.OTP_PLACEHOLDER}
            />
          </View>
          <Button
            size={100}
            onPress={onPress}
            text={OTP_AUTHENTICATION.SUBMIT}
          />
        </View>
      </View>
    </View>
  )
}

export default OTPAuthentication

const OTPAuthenticationStyles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
})
