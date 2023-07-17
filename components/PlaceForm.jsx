import { useState, useCallback } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Input from './Input'
import SubmitButton from './SubmitButton'
import ImagePicker from './ImagePicker'
import LocationPicker from './LocationPicker'
import { Place } from '../models/place'
import { Alert } from 'react-native'

const PlaceForm = ({ onFormSubmit }) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [selectedImage, setSelectedImage] = useState()
  const [pickedLocation, setPickedLocation] = useState()

  const changeTitleHandler = (enteredText) => {
    setEnteredTitle(enteredText)
  }
  const takeImagenHandler = (imageUrl) => {
    setSelectedImage(imageUrl)
  }
  const pickLocationHandler = useCallback((location) => {
    setPickedLocation(location)
  }, [])

  const savePlaceHandler = () => {
    if (!enteredTitle || !selectedImage || !pickedLocation) {
      Alert.alert('Missing fields', 'Please provide title, image and location!')
      return
    }
    const placeData = new Place(enteredTitle, selectedImage, pickedLocation)

    onFormSubmit(placeData)
  }
  return (
    <ScrollView style={styles.form}>
      <Input
        label="Title"
        textInputConfig={{
          onChangeText: changeTitleHandler,
          value: enteredTitle,
        }}
      />
      <ImagePicker onTakeImage={takeImagenHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <SubmitButton onPress={savePlaceHandler}>Add Place</SubmitButton>
    </ScrollView>
  )
}
export default PlaceForm
const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingHorizontal: 20,
    marginBottom: 35,
  },
})
