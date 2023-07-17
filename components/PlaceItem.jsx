import { StyleSheet, Text, View, Image, Pressable, Platform } from 'react-native'
import { Colors } from '../constants/style'

const PlaceItem = ({ place, onSelect }) => {
  const { imageUri, title, address } = place

  return (
    <Pressable
      android_ripple={{ color: Colors.primary200 }}
      style={({ pressed }) => [styles.container, Platform.OS === 'ios' && pressed && styles.btnPressed]}
      onPress={onSelect}
    >
      <Image source={{ uri: imageUri }} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </Pressable>
  )
}
export default PlaceItem
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 12,
    backgroundColor: Colors.primary500,
    borderRadius: 6,
    elevation: 4,
    shadowColor: '#15191d',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  btnPressed: {
    opacity: 0.9,
  },
  content: {
    flex: 2,
    padding: 10,
  },
  image: {
    flex: 1,
    height: 100,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.gray700,
  },
  address: {
    fontSize: 12,
    color: Colors.gray700,
  },
})
