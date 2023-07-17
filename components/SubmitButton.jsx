import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Colors } from '../constants/style'
const SubmitButton = ({ children, onPress, style }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
      <Text style={styles.btnText}>{children}</Text>
    </Pressable>
  )
}
export default SubmitButton
const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    margin: 4,
    backgroundColor: '#071522',
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.primary50,
  },
  pressed: {
    opacity: 0.7,
  },
})
