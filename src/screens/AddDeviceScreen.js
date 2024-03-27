import { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { ADD_DEVICE } from '../constants/AddDevice'
import { generateRandomNumbers } from '../utils/generateRandomNumbers'

const AddDeviceScreen = () => {
  const [randomNumber, setRandomNumber] = useState()

  useEffect(() => {
    setRandomNumber(generateRandomNumbers())
  }, [])

  return (
    <View>
      <Text>{ADD_DEVICE.TITLE}</Text>
      <Text>{randomNumber}</Text>
      <Text>{ADD_DEVICE.DESCRIPTION}</Text>
    </View>
  )
}

export default AddDeviceScreen
