import { ERROR } from '../constants/messages'
import { useState, useEffect } from 'react'
import * as Notifications from 'expo-notifications'
import Constants from 'expo-constants'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
})

const useExpoToken = () => {
  const [expoToken, setExpoToken] = useState('')

  const handleGetPushToken = async () =>
    (
      await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig.extra.eas.projectId,
      })
    ).data

  const handleSuccessfulPermission = async (status) => {
    if (status !== 'granted') {
      alert(ERROR.NOTIFICATION_INVALID_PERMISSION)
      return
    }
    const token = await handleGetPushToken()
    setExpoToken(token)
  }

  useEffect(() => {
    const handlePermissionNotification = async () => {
      const { status } = await Notifications.requestPermissionsAsync()
      handleSuccessfulPermission(status)
    }

    handlePermissionNotification()
  }, [])

  return expoToken
}

export default useExpoToken
