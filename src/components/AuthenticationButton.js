import { useNavigation } from '@react-navigation/native'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { AntDesign, FontAwesome6, Feather } from '@expo/vector-icons'
import { NAVIGATION } from '../constants/navigation'

const AuthenticationButton = ({ name, text, ...props }) => {
  const navigation = useNavigation()

  const navigateScreenHandler = () => {
    navigation.navigate(name)
  }

  return (
    <View style={authenticationBtnStyles.btnContainer}>
      <TouchableOpacity
        style={authenticationBtnStyles.button}
        onPress={navigateScreenHandler}
        {...props}
      >
        <View style={authenticationBtnStyles.btnInnerContainer}>
          {name === NAVIGATION.OTP_AUTHENTICATION ? (
            <AntDesign name="unlock" size={30} color="black" />
          ) : (
            <FontAwesome6 name="face-laugh" size={24} color="black" />
          )}
          <Text style={authenticationBtnStyles.btnText}>{text}</Text>
        </View>
        <Feather name="chevron-right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

export default AuthenticationButton

const authenticationBtnStyles = StyleSheet.create({
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: 350,
    height: 70,
    borderRadius: 10,
    backgroundColor: '#ededed',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  btnInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    paddingLeft: 12,
    fontWeight: '700',
  },
})
