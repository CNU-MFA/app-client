import { View, Text, StyleSheet } from 'react-native'

const Header = ({ text, ...props }) => {
  return (
    <View style={headerStyles.header} {...props}>
      <Text style={headerStyles.title}>{text}</Text>
    </View>
  )
}

export default Header

const headerStyles = StyleSheet.create({
  header: {
    flex: 2,
  },
  title: {
    fontSize: 36,
    color: 'rgb(52, 152, 219)',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 24,
  },
})
