import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, Text } from 'react-native-gesture-handler'

const AthenticationButton = ({ screen, text, ...props }) => {
  const navigation = useNavigation()

  const navigateScreenHandler = () => {
    navigation.navigate(
      { screen },
      {
        screen,
      },
    )
  }

  return (
    <TouchableOpacity onPress={navigateScreenHandler} {...props}>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

export default AthenticationButton
