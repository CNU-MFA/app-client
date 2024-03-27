import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HOME } from '../constants/Home'

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Text>{HOME.TITLE}</Text>
      <View>
        <Text>{HOME.USER_ID}</Text>
        <TextInput placeholder={HOME.USER_ID_PLACEHOLDER} />
        <Text>{HOME.PASSWORD}</Text>
        <TextInput placeholder={HOME.PASSWORD_PLACEHOLDER} />
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('AddDevice', { screen: 'AddDevice' })
        }
      >
        <Text>{HOME.SUBMIT}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
