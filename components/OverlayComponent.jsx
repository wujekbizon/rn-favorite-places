import { StyleSheet, Text, View, Pressable } from 'react-native'
const OverlayComponent = ({ onPress, children, style }) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress} android_ripple={{ color: '#706d6d' }}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}
export default OverlayComponent
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cccccc63',
    paddingVertical: 12,
    paddingHorizontal: 24,
    position: 'absolute',
    bottom: 20,
    left: 20,
    zIndex: 999999,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  },
})
