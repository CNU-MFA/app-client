import { View, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HOME } from '../constants/home'
import { useState } from 'react'
import { styles } from '../assets/styles'
import Input from '../components/common/Input'
import { ERROR } from '../constants/messages'
import Header from '../components/common/Header'
import Button from '../components/common/Button'
import { NAVIGATION } from '../constants/navigation'
import API from '../api/API'
import Logo from '../assets/images/logo.png'

const Home = () => {
  const navigation = useNavigation()
  const [user, setUser] = useState({
    id: '',
    password: '',
  })

  const onChangeUserId = (text) => {
    setUser({ ...user, id: text })
  }

  const onChangeUserPassword = (text) => {
    setUser({ ...user, password: text })
  }

  const isInputValid = () => {
    return user.id === '' || user.password === ''
  }

  const displayLoginPrompt = () => {
    alert(ERROR.LOGIN_PROMPT_MESSAGE)
  }

  const handleSuccessfulLogin = (res) => {
    if (res.ok && res.deviceState) {
      navigation.navigate(NAVIGATION.AUTHENTICATION, { state: { ...user } })
      return
    }
    navigation.navigate(NAVIGATION.ADD_DEVICE, { state: { ...user } })
  }

  const onPress = async () => {
    if (isInputValid()) {
      displayLoginPrompt()
      return
    }
    const res = await API.postLogin(user.id, user.password)
    handleSuccessfulLogin(res)
  }

  return (
    <View style={styles.container}>
      <View style={homeStyles.logoConatiner}>
        <Image source={Logo} style={homeStyles.logo} />
      </View>
      <View style={homeStyles.form}>
        <View style={homeStyles.inputForm}>
          <Input
            label={HOME.USER_ID}
            placeholder={HOME.USER_ID_PLACEHOLDER}
            value={user.id}
            onChangeText={onChangeUserId}
          />
        </View>
        <View style={homeStyles.inputForm}>
          <Input
            label={HOME.PASSWORD}
            secureTextEntry
            onChangeText={onChangeUserPassword}
            value={user.password}
            placeholder={HOME.PASSWORD_PLACEHOLDER}
          />
        </View>
        <Button size={122} onPress={onPress} text={HOME.SUBMIT} />
      </View>
    </View>
  )
}

export default Home

const homeStyles = StyleSheet.create({
  logoConatiner: {
    marginBottom: 50,
  },
  logo: {
    width: 150,
    height: 150,
  },
  form: {
    flex: 7,
  },
  inputForm: {
    marginBottom: 34,
  },
})
