import { useEffect, useState } from 'react'
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native'
import { LayoutWrapper, CustomButton } from '../components'
import { Colors } from '../constants/style'
import { fetchPlaceDetails } from '../util/database'

const PlaceDetailsScreen = ({ route, navigation }) => {
  const [fetchedPlace, setFetchedPlace] = useState()
  const { placeId } = route.params

  const showOnMapHandler = () => {
    navigation.navigate('Map', {
      initialLat: fetchedPlace?.location?.lat,
      initialLng: fetchedPlace?.location?.lng,
    })
  }

  useEffect(() => {
    const loadPlaceData = async () => {
      const place = await fetchPlaceDetails(placeId)
      setFetchedPlace(place)

      navigation.setOptions({
        title: place.title,
      })
    }
    loadPlaceData()
  }, [fetchPlaceDetails, placeId, navigation])

  return (
    <LayoutWrapper>
      {!fetchedPlace ? (
        <View style={styles.fallback}>
          <Text style={styles.text}>Loading place data...</Text>
        </View>
      ) : (
        <ScrollView>
          <Image source={{ uri: fetchedPlace.imageUri }} style={styles.image} resizeMode="cover" />

          <View style={styles.container}>
            <View style={styles.addressContainer}>
              <Text style={styles.address}>{fetchedPlace.address}</Text>
            </View>
            <CustomButton icon="map" onPress={showOnMapHandler}>
              View on Map
            </CustomButton>
          </View>
        </ScrollView>
      )}
    </LayoutWrapper>
  )
}
export default PlaceDetailsScreen
const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { width: '100%', height: '30%', minHeight: 300 },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
})
