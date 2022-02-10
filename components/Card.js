import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Card({ style, children }) {
  return (
    <View style={{ ...styles.cardContainer, ...style }}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: { 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: 'white',
  }
})

export default Card