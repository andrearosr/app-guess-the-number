import { StyleSheet, Dimensions } from 'react-native'

const calculateTitleFontSize = () => {
  return Dimensions.get('window').width >= 400 ? 24 : 20;
}

export default {
  primary: '#A9B18F',
  accent: '#CB807D',
  buttonTextColor: 'white',
  titleFontSize: calculateTitleFontSize()
}

const globalStyles = StyleSheet.create({
  centered: {
    alignItems: 'center',
  }
})

export { globalStyles }
