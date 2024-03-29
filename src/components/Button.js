import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Button = ({ size, onPress, text, ...props }) => {
  return (
    <View style={buttonStyles.btnContainer} {...props}>
      <TouchableOpacity
        style={{ ...buttonStyles.button, width: size }}
        onPress={onPress}
      >
        <Text style={buttonStyles.btnText}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button

const buttonStyles = StyleSheet.create({
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
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
