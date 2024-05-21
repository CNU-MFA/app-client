import { styles } from '../assets/styles'
import { LOGIN } from '../utils/constants/main'
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

  const handleSuccessfulLogin = (res) => {
    if (res.ok) {
      // 사용자가 있으면 Home으로 이동
      navigation.navigate(NAVIGATION.HOME, { state: { ...user } })
      return
    }
    // 사용자가 없으면 실패 알림
    alert(ERROR.LOGIN_FAILURE_MESSAGE)
  }

  const onPress = async () => {
    // 유효성 검사 진행
    if (isInputValid()) {
      displayLoginPrompt()
      return
    }
    // 아이디, 패스워드, 엑스포 토큰 전송
    const res = await API.postLogin(user.id, user.password, expoPushToken.data)
    handleSuccessfulLogin(res)
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
              label={LOGIN.USER_ID}
              placeholder={LOGIN.USER_ID_PLACEHOLDER}
              value={user.id}
              onChangeText={onChangeUserId}
            />
          </View>
          <View style={loginStyles.inputForm}>
            <Input
              label={LOGIN.PASSWORD}
              secureTextEntry
              onChangeText={onChangeUserPassword}
              value={user.password}
              placeholder={LOGIN.PASSWORD_PLACEHOLDER}
            />
          </View>
          <Button size={122} onPress={onPress} text={LOGIN.SUBMIT} />
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
