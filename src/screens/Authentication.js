import { styles } from '../assets/styles'
import { AUTHENTICATION } from '../constants/main'
import { authenticationConfig } from '../config/authenticationConfig'
import { View, Text, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'
import AuthenticationButton from '../components/AuthenticationButton'
import Header from '../components/common/Header'

const Authentication = () => {
  const route = useRoute()
  const user = route.params?.state

  return (
    <View style={styles.container}>
      <Header text={AUTHENTICATION.TITLE} />
      <View style={styles.innerContainer}>
        <Text style={styles.description}>{AUTHENTICATION.DESCRIPTION}</Text>
        <View style={authenticationStyles.container}>
          {Object.entries(authenticationConfig).map(([key, value]) => (
            <AuthenticationButton
              key={key}
              name={value.name}
              user={user}
              text={value.text}
            />
          ))}
        </View>
      </View>
    </View>
  )
}

export default Authentication

const authenticationStyles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
})
