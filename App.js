import PermissionProvider from './src/contexts/PermissionContext'
import StackNavigation from './src/navigation/StackNavigation'

export default function App() {
  return (
    <PermissionProvider>
      <StackNavigation />
    </PermissionProvider>
  )
}
