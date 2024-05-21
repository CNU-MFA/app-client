import { View, Text, StyleSheet, Image } from 'react-native'
import Logo from '../assets/images/logo.png'
import { styles } from '../assets/styles'
import { HOME } from '../utils/constants/main'
import { useNavigation } from '@react-navigation/native'
import Button from '../components/common/Button'
import { useEffect, useState } from 'react'
import { NAVIGATION } from '../utils/constants/navigation'
import API from '../apis/API'

const GreetingView = () => {
  return (
    <View>
      <Text style={homeStyles.title}>{HOME.TITLE}</Text>
      <Text style={homeStyles.description}>{HOME.DESCRIPTION}</Text>
    </View>
  )
}

const AuthBanner = ({ onPress }) => {
  return (
    <View>
      <Text style={homeStyles.description}>
        {HOME.AUTHENTICATION_DESCRIPTION}
      </Text>
      <View style={homeStyles.btnContainer}>
        <Button size={250} onPress={onPress} text={HOME.SUBMIT} />
      </View>
    </View>
  )
}

const Home = () => {
  const navigation = useNavigation()
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const handleRequestHistory = async () => {
      const res = await API.getHistory()
      setIsLogin(res.ok)
    }
    handleRequestHistory()
  }, [])

  const onPress = () => {
    navigation.navigate(NAVIGATION.AUTHENTICATION)
  }

  const renderIsLoginBanner = () => {
    return isLogin ? <AuthBanner onPress={onPress} /> : <GreetingView />
  }

  return (
    <View style={styles.container}>
      <View style={homeStyles.logoContainer}>
        <Image source={Logo} style={homeStyles.logo} />
      </View>
      <View style={homeStyles.bannerContainer}>{renderIsLoginBanner()}</View>
    </View>
  )
}

export default Home

const homeStyles = StyleSheet.create({
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 150,
    height: 150,
  },
  bannerContainer: {
    flex: 3,
  },
  title: {
    marginTop: 24,
    fontSize: 36,
    marginBottom: 12,
    fontWeight: '700',
    textAlign: 'center',
    color: 'rgb(52, 152, 219)',
  },
  description: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 42,
    color: 'rgb(52, 152, 219)',
  },
  btnContainer: {
    marginTop: 24,
  },
})
