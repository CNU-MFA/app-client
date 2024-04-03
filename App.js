import { useEffect } from 'react'
import useExpoToken from './src/hooks/useExpoToken'
import StackNavigation from './src/navigation/StackNavigation'

export default function App() {
  const expoToken = useExpoToken()

  useEffect(() => {
    console.log(expoToken)
  }, [expoToken])

  return <StackNavigation />
}
