import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Colors } from '../constants/style'

const Input = ({ label, textInputConfig, style }) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...textInputConfig} style={styles.input} />
    </View>
  )
}
export default Input
const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 8,
    marginBottom: 24,
  },
  input: {
    padding: 8,
    backgroundColor: Colors.primary50,
    borderRadius: 2,
    color: Colors.primary800,
    fontSize: 16,
  },
  label: {
    fontWeight: '700',
    color: Colors.primary500,
    marginBottom: 10,
  },
})
