import { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native'
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location'
import CustomButton from './CustomButton'
import LocationPreview from './LocationPreview'
import { getAddress } from '../util/location'

const LocationPicker = ({ onPickLocation }) => {
  const navigation = useNavigation()
  const route = useRoute()
  const isFocused = useIsFocused()
  const [status, requestPermission] = useForegroundPermissions()
  const [pickedLocation, setPickedLocation] = useState()

  useEffect(() => {
    if (isFocused && route.params) {
      setPickedLocation({ lat: route.params.pickedLat, lng: route.params.pickedLng })
    }
  }, [route.params, isFocused])

  useEffect(() => {
    const fetchAddress = async () => {
      if (pickedLocation) {
        const address = await getAddress(pickedLocation.lat, pickedLocation.lng)
        onPickLocation({ ...pickedLocation, address })
      }
    }
    fetchAddress()
  }, [pickedLocation, onPickLocation])

  const verifyPermissions = async () => {
    if (status.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission()

      return permissionResponse.granted
    }

    if (status.status === PermissionStatus.DENIED) {
      Alert.alert('Insufficient Permissions!', 'You need to grant location permissions to use this app.')
      return false
    }

    return true
  }

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions()
    if (!hasPermission) {
      return
    }
    try {
      const location = await getCurrentPositionAsync()
      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  const mapPressHandler = () => {
    navigation.navigate('Map')
  }

  return (
    <View>
      <LocationPreview location={pickedLocation} />
      <View style={styles.buttons}>
        <CustomButton icon="location" onPress={getLocationHandler}>
          Location User
        </CustomButton>
        <CustomButton icon="map" onPress={mapPressHandler}>
          Pick on Map
        </CustomButton>
      </View>
    </View>
  )
}
export default LocationPicker
const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 12,
  },
})
