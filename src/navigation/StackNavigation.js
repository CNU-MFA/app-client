import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { screenConfig } from '../constants/screenConfig'
import { NAVIGATION } from '../constants/navigation'

const Stack = createStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NAVIGATION.SPLASH}>
        {Object.entries(screenConfig).map(([name, { component, options }]) => (
          <Stack.Screen
            key={name}
            name={name !== NAVIGATION.SPLASH ? name : ' '}
            component={component}
            options={options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation
