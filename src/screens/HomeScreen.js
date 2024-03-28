import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HOME } from '../constants/Home'
import { useState } from 'react'

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
          <Text style={styles.label}>{HOME.USER_ID}</Text>
          <TextInput
            autoCapitalize="none"
            onChangeText={onChangeUserId}
            value={user.id}
            style={styles.input}
            placeholder={HOME.USER_ID_PLACEHOLDER}
          />
        </View>
        <View style={styles.inputForm}>
          <Text style={styles.label}>{HOME.PASSWORD}</Text>
          <TextInput
            secureTextEntry
            autoCapitalize="none"
            onChangeText={onChangeUserPassword}
            value={user.password}
            style={styles.input}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  header: {
    flex: 3,
  },
  title: {
    fontSize: 36,
    color: 'rgb(52, 152, 219)',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 24,
  },
  form: {
    flex: 7,
  },
  inputForm: {
    marginBottom: 34,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  input: {
    width: 250,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btnConatiner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 122,
    height: 40,
    borderRadius: 30,
    backgroundColor: 'rgb(52, 152, 219)',
  },
  btnText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '700',
  },
})
