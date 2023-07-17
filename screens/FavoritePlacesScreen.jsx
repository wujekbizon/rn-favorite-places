import { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { LayoutWrapper, PlacesList } from '../components'
import { fetchPlaces } from '../util/database'

const FavoritePlacesScreen = () => {
  const isFocused = useIsFocused()
  const [places, setPlaces] = useState([])

  useEffect(() => {
    const loadPlaces = async () => {
      const places = await fetchPlaces()
      setPlaces(places)
    }

    if (isFocused) {
      loadPlaces()
    }
  }, [isFocused, fetchPlaces])

  return (
    <LayoutWrapper>
      <PlacesList data={places} />
    </LayoutWrapper>
  )
}
export default FavoritePlacesScreen
const styles = StyleSheet.create({})
