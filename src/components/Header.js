import { View, Text } from 'react-native'
import { styles } from '../assets/styles'

const Header = ({ text, ...props }) => {
  return (
    <View style={styles.header} {...props}>
      <Text style={styles.title}>{text}</Text>
    </View>
  )
}

export default Header
