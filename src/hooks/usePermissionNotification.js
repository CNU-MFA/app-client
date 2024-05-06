import { ERROR } from '../utils/constants/messages'
import { useState, useEffect } from 'react'
import * as Notifications from 'expo-notifications'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
})

const usePermissionNotification = () => {
  const [isPermission, setIsPermission] = useState(false)

  const handleSuccessfulPermission = async (status) => {
    if (status !== 'granted') {
      alert(ERROR.NOTIFICATION_INVALID_PERMISSION)
      return
    }
    setIsPermission(true)
  }

  useEffect(() => {
    const handlePermissionNotification = async () => {
      const { status } = await Notifications.requestPermissionsAsync()
      handleSuccessfulPermission(status)
    }

    handlePermissionNotification()
  }, [])

  return isPermission
}

export default usePermissionNotification
