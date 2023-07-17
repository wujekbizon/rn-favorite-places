import { useState, useLayoutEffect, useCallback, useEffect } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { IconButton, OverlayComponent } from '../components'
import { INITIAL_REGION, EUROPE_REGION } from '../constants'

const MapScreen = ({ navigation, route }) => {
  const initialLocation = route.params && {
    lat: route.params.initialLat,
    lng: route.params.initialLng,
  }

  const [selectedLocation, setSelectedLocation] = useState(initialLocation)
  const [region, setRegion] = useState(INITIAL_REGION)

  const selectLocationHandler = (event) => {
    if (initialLocation) {
      return
    }
    const lat = event.nativeEvent.coordinate.latitude
    const lng = event.nativeEvent.coordinate.longitude

    setSelectedLocation({ lat, lng })
  }

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert('No location picked!', 'You have to pick a location (bytapping on the map) first!')
      return
    }
    navigation.navigate('AddPlace', {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    })
  }, [navigation, selectedLocation])

  const changeRegionHandler = () => {
    setRegion(EUROPE_REGION)
  }

  useEffect(() => {
    if (route.params) {
      const orginRegion = {
        latitude: initialLocation.lat,
        longitude: initialLocation.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }

      setRegion(orginRegion)
    }
  }, [route.params])

  useLayoutEffect(() => {
    if (initialLocation) {
      return
    }
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton icon="save" color={tintColor} size={22} onPress={savePickedLocationHandler} />
      ),
    })
  }, [navigation, savePickedLocationHandler, initialLocation])

  return (
    <View style={styles.container}>
      <MapView initialRegion={region} region={region} style={styles.map} onPress={selectLocationHandler}>
        {selectedLocation && (
          <Marker
            title="Picked Location"
            coordinate={{ latitude: selectedLocation.lat, longitude: selectedLocation.lng }}
          />
        )}
      </MapView>
      <OverlayComponent onPress={changeRegionHandler}>Europe Region</OverlayComponent>
    </View>
  )
}
export default MapScreen
const styles = StyleSheet.create({
  flex: 1,
  map: {
    width: '100%',
    height: '100%',
  },
})
