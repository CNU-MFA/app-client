import { styles } from '../assets/styles/index'
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
  const user = route.params?.state

  const [inputOTP, setInputOTP] = useState('')

  const onChangeText = (text) => {
    setInputOTP(text)
  }

  const isInputOTP = () => {
    return inputOTP === ''
  }

  const handleVerifyOTPAuthentication = async () => {
    const res = await API.postAuthOTP(user.id, user.password, inputOTP)
    const status = res.status

    if (status === 200) return navigation.navigate(NAVIGATION.SUCCESS)

    return alert(ERROR.INVALID_OTP_AUTHENTICATION_PROMPT_MESSAGE)
  }

  const onPress = async () => {
    if (isInputOTP()) {
      alert(ERROR.INPUT_OTP_AUTHENTICATION_PROMPT_MESSAGE)
      return
    }
    await handleVerifyOTPAuthentication()
  }

  return (
    <View style={styles.container}>
      <Header text="OTP 인증" />
      <View style={styles.innerContainer}>
        <Text style={styles.description}>
          웹에서 제공한 OTP를 입력해주세요.
        </Text>
        <View style={OTPAuthenticationStyles.container}>
          <View style={OTPAuthenticationStyles.inputContainer}>
            <Input
              keyboardType="number-pad"
              onChangeText={onChangeText}
              value={inputOTP}
              placeholder="OTP를 입력해주세요."
            />
          </View>
          <Button size={100} onPress={onPress} text="확인" />
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
