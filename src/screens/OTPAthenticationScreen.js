import { View, Text, StyleSheet } from 'react-native'
import { OTP_ATHENTICATION } from '../constants/OTPAthentication'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../assets/styles/index'
import Header from '../components/common/Header'
import { useState } from 'react'
import Input from '../components/common/Input'
import { NAVIGATION } from '../constants/navigation'
import Button from '../components/common/Button'

const OTPAthentication = () => {
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
      <Header text={OTP_ATHENTICATION.TITLE} />
      <View style={styles.innerContainer}>
        <Text style={styles.description}>{OTP_ATHENTICATION.DESCRIPTION}</Text>
        <View style={OTPAthenticationStyles.container}>
          <View style={OTPAthenticationStyles.inputContainer}>
            <Input
              keyboardType="number-pad"
              onChangeText={onChangeText}
              value={inputOTP}
              placeholder={OTP_ATHENTICATION.OTP_PLACEHOLDER}
            />
          </View>
          <Button
            size={100}
            onPress={onPress}
            text={OTP_ATHENTICATION.SUBMIT}
          />
        </View>
      </View>
    </View>
  )
}

export default OTPAthentication

const OTPAthenticationStyles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
})
