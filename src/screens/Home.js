import { View, Text, StyleSheet, Image } from 'react-native'
import Logo from '../assets/images/logo.png'
import { styles } from '../assets/styles'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { NAVIGATION } from '../utils/constants/navigation'
// import API from '../apis/API'
import * as Notifications from 'expo-notifications'

// const GreetingView = () => {
//   return (
//     <View>
//       <Text style={homeStyles.title}>반갑습니다! 👋</Text>
//       <Text style={homeStyles.description}>
//         {'\n2차 인증을 위해\n충남대학교 웹 포털에서\n로그인을 진행해주세요!'}
//       </Text>
//     </View>
//   )
// }

// const AuthBanner = ({ onPress }) => {
//   return (
//     <View>
//       <Text style={homeStyles.description}>
//         {
//           '충남대학교 웹 포털에서\n로그인을 시도하였습니다.\n2차 인증수단을 선택해주세요.'
//         }
//       </Text>
//       <View style={homeStyles.btnContainer}>
//         <Button size={250} onPress={onPress} text="2차 인증수단 선택하기" />
//       </View>
//     </View>
//   )
// }

const Home = () => {
  const navigation = useNavigation()
  // const route = useRoute()
  // const user = route.params?.state

  // 임시 알림 가기! 나중에 알림 올때 사용할 거니까 확인!
  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: '📬 2차 인증을 진행해주세요.',
        body: '2차 인증 하러 가기.',
        data: { url: 'myapp://HOME' },
      },
      trigger: { seconds: 2 },
    })
  }

  useEffect(() => {
    schedulePushNotification()

    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const url = response.notification.request.content.data.url
        if (url) {
          navigation.navigate(NAVIGATION.AUTHENTICATION, { state: { user } })
        }
      },
    )

    return () => subscription.remove()
  }, [])

  // const [isLogin, setIsLogin] = useState(false)

  // useEffect(() => {
  //   const handleRequestHistory = async () => {
  //     const res = await API.getHistory()
  //     setIsLogin(res.ok)
  //   }
  //   handleRequestHistory()
  // }, [])

  // const onPress = () => {
  //   navigation.navigate(NAVIGATION.AUTHENTICATION)
  // }

  // const renderIsLoginBanner = () => {
  //   return isLogin ? <AuthBanner onPress={onPress} /> : <GreetingView />
  // }

  return (
    <View style={styles.container}>
      <View style={homeStyles.logoContainer}>
        <Image source={Logo} style={homeStyles.logo} />
      </View>
      <View style={homeStyles.bannerContainer}>
        <View>
          <Text style={homeStyles.title}>반갑습니다! 👋</Text>
          <Text style={homeStyles.description}>
            {
              '\n2차 인증을 위해\n충남대학교 웹 포털에서\n로그인을 진행해주세요!'
            }
          </Text>
        </View>
      </View>
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
