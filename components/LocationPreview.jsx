import { StyleSheet, Text, View, Image } from 'react-native'
import { Colors } from '../constants/style'
import { getMapPreview } from '../util/location'

const LocationPreview = ({ location }) => {
  return (
    <View style={styles.container}>
      {location ? (
        <Image source={{ uri: getMapPreview(location?.lng, location?.lat) }} style={styles.image} />
      ) : (
        <Text>No location added yet.</Text>
      )}
    </View>
  )
}
export default LocationPreview
const styles = StyleSheet.create({
  container: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary50,
    borderRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
})
