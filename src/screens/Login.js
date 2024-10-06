import { styles } from '../assets/styles'
import { ERROR } from '../utils/constants/messages'
import { NAVIGATION } from '../utils/constants/navigation'
import { useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Input from '../components/common/Input'
import Button from '../components/common/Button'
import Logo from '../assets/images/logo.png'
import API from '../apis/API'
import useExpoPushToken from '../hooks/useExpoPushToken'

const Login = () => {
  const navigation = useNavigation()
  const [user, setUser] = useState({
    id: '',
    password: '',
  })
  const expoPushToken = useExpoPushToken()

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

  const handleLogin = async (token) => {
    const res = await API.postLogin(user.id, user.password, token)
    const status = res.status
    

    if (status === 200) {
      navigation.navigate(NAVIGATION.HOME, {
        user: { id: user.id, password: user.password },
      })
      return
    }

    alert(ERROR.LOGIN_FAILURE_MESSAGE)
  }

  const onPress = async () => {
    if (isInputValid()) {
      displayLoginPrompt()
      return
    }
    await handleLogin(expoPushToken.data)
  }

  return (
    <View style={styles.container}>
      <View style={loginStyles.innerContainer}>
        <View style={loginStyles.logoContainer}>
          <Image source={Logo} style={loginStyles.logo} />
        </View>
        <View style={loginStyles.form}>
          <View style={loginStyles.inputForm}>
            <Input
              label="학번 및 교직원 번호"
              placeholder="학번 및 교직원 번호를 입력해주세요."
              value={user.id}
              onChangeText={onChangeUserId}
            />
          </View>
          <View style={loginStyles.inputForm}>
            <Input
              label="비밀번호"
              secureTextEntry
              onChangeText={onChangeUserPassword}
              value={user.password}
              placeholder="비밀번호를 입력해주세요."
            />
          </View>
          <Button size={122} onPress={onPress} text="로그인" />
        </View>
      </View>
    </View>
  )
}

export default Login

const loginStyles = StyleSheet.create({
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 150,
    height: 150,
  },
  innerContainer: {
    marginTop: 100,
  },
  form: {
    flex: 8,
  },
  inputForm: {
    marginBottom: 34,
  },
})
