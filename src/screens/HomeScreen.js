import { View, Text, TextInput } from 'react-native'
import { HOME } from '../constants/Home'

const HomeScreen = () => {
  return (
    <View>
      <Text>{HOME.TITLE}</Text>
      <View>
        <Text>{HOME.USER_ID}</Text>
        <TextInput placeholder={HOME.USER_ID_PLACEHOLDER} />
        <Text>{HOME.PASSWORD}</Text>
        <TextInput placeholder={HOME.PASSWORD_PLACEHOLDER} />
      </View>
    </View>
  )
}

export default HomeScreen
