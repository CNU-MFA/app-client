import { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { ADD_DEVICE } from '../constants/AddDevice'
import { generateRandomNumbers } from '../utils/generateRandomNumbers'
import { useNavigation } from '@react-navigation/native'
useNavigation

const AddDeviceScreen = () => {
  const navigation = useNavigation()
  const [randomNumber, setRandomNumber] = useState()

  useEffect(() => {
    setRandomNumber(generateRandomNumbers())
  }, [])

  return (
    <View>
      <Text>{ADD_DEVICE.TITLE}</Text>
      <Text>{randomNumber}</Text>
      <Text>{ADD_DEVICE.DESCRIPTION}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Athentication', { screen: 'Athentication' })
        }
      >
        <Text>{ADD_DEVICE.SUBMIT}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddDeviceScreen
