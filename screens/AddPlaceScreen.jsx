import { StyleSheet } from 'react-native'
import { LayoutWrapper, PlaceForm } from '../components'
import { insertPlace } from '../util/database'

const AddPlaceScreen = ({ navigation }) => {
  const createPlaceHandler = async (place) => {
    await insertPlace(place)
    navigation.navigate('FavoritePlaces')
  }

  return (
    <LayoutWrapper>
      <PlaceForm onFormSubmit={createPlaceHandler} />
    </LayoutWrapper>
  )
}
export default AddPlaceScreen
const styles = StyleSheet.create({})
