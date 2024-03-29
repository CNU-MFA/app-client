import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HOME } from '../constants/Home'
import { useState } from 'react'
import { styles } from '../assets/styles'
import Input from '../components/Input'

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
      alert('모든 정보를 입력해주세요.')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{HOME.TITLE}</Text>
      </View>
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
        <View style={styles.btnConatiner}>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.btnText}>{HOME.SUBMIT}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default HomeScreen
