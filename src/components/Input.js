import { View, Text, TextInput, StyleSheet } from 'react-native'

const Input = ({
  label,
  keyboardType,
  secureTextEntry,
  onChangeText,
  value,
  placeholder,
  ...props
}) => {
  return (
    <View {...props}>
      {label && <Text style={InputStyles.label}>{label}</Text>}
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
        style={InputStyles.input}
        placeholder={placeholder}
      />
    </View>
  )
}

export default Input

const InputStyles = StyleSheet.create({
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
    backgroundColor: '#fff',
  },
})
