import { useState } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import ImagePreview from './ImagePreview'
import CustomButton from './CustomButton'
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker'

const ImagePicker = ({ onTakeImage }) => {
  const [status, requestPermission] = useCameraPermissions()
  const [imageUri, setImageUri] = useState(null)

  const verifyPermissions = async () => {
    if (status.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission()

      return permissionResponse.granted
    }

    if (status.status === PermissionStatus.DENIED) {
      Alert.alert('Insufficient Permissions!', 'You need to grant camera permissions to use this app.')
      return false
    }

    return true
  }

  const imagePressHandler = async () => {
    const hasPermission = await verifyPermissions()
    if (!hasPermission) {
      return
    }
    try {
      const result = await launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
      })
      const imageUri = result.assets[0].uri
      setImageUri(imageUri)
      onTakeImage(imageUri)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View>
      <ImagePreview imageUri={imageUri} />
      <View style={styles.btnContainer}>
        <CustomButton icon="camera" onPress={imagePressHandler}>
          Take Image
        </CustomButton>
      </View>
    </View>
  )
}
export default ImagePicker
const styles = StyleSheet.create({
  btnContainer: {
    marginHorizontal: 12,
    marginVertical: 14,
  },
})
