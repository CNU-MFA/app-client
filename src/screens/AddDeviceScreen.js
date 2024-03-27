import { Text, View } from 'react-native'
import { ADD_DEVICE } from '../constants/AddDevice'

const AddDeviceScreen = () => {
  return (
    <View>
      <Text>{ADD_DEVICE.TITLE}</Text>
      <Text>42</Text>
      <Text>{ADD_DEVICE.DESCRIPTION}</Text>
    </View>
  )
}

export default AddDeviceScreen
