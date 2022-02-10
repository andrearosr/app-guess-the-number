import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

function Button({ title, onPress, color, children }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ backgroundColor: color }}>
      <Text>{title}</Text>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({});

export default Button;