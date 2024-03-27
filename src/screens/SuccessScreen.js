import { Text, View } from 'react-native'
import { SUCCESS } from '../constants/Success'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const SuccessScreen = () => {
  const navigation = useNavigation()
  
  return (
    <View>
      <Text>{SUCCESS.DESCRIPTION}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Athentication', {
            screen: 'Athentication',
          })
        }
      >
        <Text>{SUCCESS.SUBMIT}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SuccessScreen
