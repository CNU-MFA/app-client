import { useState } from 'react'
import * as Notifications from 'expo-notifications'
import Constants from 'expo-constants'
import { usePermission } from '../contexts/PermissionContext'

const useExpoPushToken = () => {
  const [expoPushToken, setExpoPushToken] = useState('')
  const isPermission = usePermission()

  const handleGetExpoPushToken = async () => {
    if (isPermission) {
      const token = await Notifications.getExpoPushTokenAsync({
        projectId: Constants.projectId,
      })
      setExpoPushToken(token)
    }
  }

  handleGetExpoPushToken()

  return expoPushToken
}

export default useExpoPushToken
