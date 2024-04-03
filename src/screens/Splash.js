import { NAVIGATION } from '../constants/navigation'
import { useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Logo from '../assets/images/logo.png'

const TIME = 2000

const Splash = () => {
  const navigation = useNavigation()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(NAVIGATION.LOGIN)
    }, TIME)
    return () => clearTimeout(timer)
  }, [])

  return (
    <View style={splashStyles.container}>
      <View style={splashStyles.logoContainer}>
        <Image source={Logo} style={splashStyles.logo} />
      </View>
    </View>
  )
}

export default Splash

const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
})
