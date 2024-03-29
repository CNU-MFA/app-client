import { View, Text, TextInput } from 'react-native'
import { styles } from '../assets/styles'

const Input = ({
  label,
  secureTextEntry,
  onChangeText,
  value,
  placeholder,
  ...props
}) => {
  return (
    <View {...props}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
        placeholder={placeholder}
      />
    </View>
  )
}

export default Input
