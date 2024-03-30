import { View, Text, StyleSheet } from 'react-native'
import { SUCCESS } from '../constants/success'
import { useNavigation } from '@react-navigation/native'
import Button from '../components/common/Button'
import { NAVIGATION } from '../constants/navigation'

const Success = () => {
  const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate(NAVIGATION.AUTHENTICATION)
  }

  return (
    <View style={successStyles.container}>
      <Text style={successStyles.title}>{SUCCESS.DESCRIPTION}</Text>
      <Button size={100} onPress={onPress} text={SUCCESS.SUBMIT} />
    </View>
  )
}

export default Success

const successStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    color: 'rgb(52, 152, 219)',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 24,
  },
})
