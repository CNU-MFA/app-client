import { View, Text, StyleSheet } from 'react-native'
import { OTP_AUTHENTICATION } from '../constants/OTPAuthentication'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../assets/styles/index'
import Header from '../components/common/Header'
import { useState } from 'react'
import Input from '../components/common/Input'
import { NAVIGATION } from '../constants/navigation'
import Button from '../components/common/Button'

const OTPAuthentication = () => {
  const [inputOTP, setInputOTP] = useState('')
  const navigation = useNavigation()

  const onChangeText = (text) => {
    setInputOTP(text)
  }

  const onPress = () => {
    navigation.navigate(NAVIGATION.SUCCESS)
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
