import { StyleSheet, Pressable, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const IconButton = ({ onPress, color, icon, size }) => {
  return (
    <Pressable style={({ pressed }) => [styles.iconContainer, pressed && styles.pressed]} onPress={onPress}>
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  )
}
export default IconButton
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  iconContainer: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
