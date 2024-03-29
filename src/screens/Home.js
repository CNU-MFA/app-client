import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HOME } from '../constants/home'
import { useState } from 'react'
import { styles } from '../assets/styles'
import Input from '../components/common/Input'
import { ERROR } from '../constants/error'
import Header from '../components/common/Header'
import Button from '../components/common/Button'
import { NAVIGATION } from '../constants/navigation'

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

  const onPress = () => {
    if (user.id !== '' && user.password !== '') {
      navigation.navigate(NAVIGATION.ADD_DEVICE)
      return
    }
    alert(ERROR.LOGIN_PROMPT_MESSAGE)
  }

  return (
    <View style={styles.container}>
      <Header text={HOME.TITLE} />
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
  form: {
    flex: 7,
  },
  inputForm: {
    marginBottom: 34,
  },
})
