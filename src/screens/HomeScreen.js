import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HOME } from '../constants/home'
import { useState } from 'react'
import { styles } from '../assets/styles'
import Input from '../components/Input'
import { ERROR } from '../constants/error'
import Header from '../components/Header'
import Button from '../components/Button'

const HomeScreen = () => {
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
      navigation.navigate('AddDevice', { screen: 'AddDevice' })
    } else {
      alert(ERROR.LOGIN_PROMPT_MESSAGE)
    }
  }

  return (
    <View style={styles.container}>
      <Header text={HOME.TITLE} />
      <View style={styles.form}>
        <View style={styles.inputForm}>
          <Input
            label={HOME.USER_ID}
            placeholder={HOME.USER_ID_PLACEHOLDER}
            value={user.id}
            onChangeText={onChangeUserId}
          />
        </View>
        <View style={styles.inputForm}>
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

export default HomeScreen
