import { StyleSheet, Text, View, Pressable, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../constants/style'

const CustomButton = ({ children, icon, onPress, style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [style, styles.button, Platform === 'ios' && pressed && styles.pressed]}
      android_ripple={{ color: Colors.primary200 }}
    >
      <Ionicons name={icon} color={Colors.primary500} size={20} />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}
export default CustomButton
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderColor: Colors.primary500,
    borderWidth: 1.5,
    borderRadius: 2,
  },
  text: {
    color: Colors.primary500,
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 6,
  },
  pressed: {
    opacity: 0.7,
  },
})
