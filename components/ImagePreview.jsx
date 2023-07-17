import { StyleSheet, Text, View, Image } from 'react-native'
import { Colors } from '../constants/style'

const ImagePreview = ({ imageUri }) => {
  return (
    <View style={styles.container}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} resizeMode="contain" />
      ) : (
        <Text>No image taken yet.</Text>
      )}
    </View>
  )
}
export default ImagePreview
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
