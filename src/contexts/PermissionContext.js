import React, { createContext, useContext } from 'react'
import usePermissionNotification from '../hooks/usePermissionNotification'

const PermissionContext = createContext()

const PermissionProvider = ({ children }) => {
  const isPermission = usePermissionNotification()

  return (
    <PermissionContext.Provider value={isPermission}>
      {children}
    </PermissionContext.Provider>
  )
}

export default PermissionProvider

export const usePermission = () => {
  return useContext(PermissionContext)
}
