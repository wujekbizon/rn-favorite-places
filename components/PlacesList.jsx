import { StyleSheet, View, FlatList, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../constants/style'
import PlaceItem from './PlaceItem'

const PlacesList = ({ data }) => {
  const navigation = useNavigation()

  const selectPlaceHandler = (id) => {
    navigation.navigate('PlaceDetails', {
      placeId: id,
    })
  }

  return (
    <View style={styles.rootContainer}>
      {data?.length === 0 || !data ? (
        <View style={styles.textContainer}>
          <Text style={styles.text}>No places added yet - start adding some!</Text>
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PlaceItem place={item} onSelect={() => selectPlaceHandler(item.id)} />}
        />
      )}
    </View>
  )
}
export default PlacesList
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 24,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: Colors.primary200,
  },
})
