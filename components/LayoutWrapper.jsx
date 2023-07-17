import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '../constants/style'

const LayoutWrapper = ({ children, colors, style }) => {
  return (
    <LinearGradient style={[styles.rootScreen, style]} colors={colors ?? [Colors.gray700, Colors.gray700]}>
      {children}
    </LinearGradient>
  )
}
export default LayoutWrapper

const styles = StyleSheet.create({
  rootScreen: { flex: 1 },
})
