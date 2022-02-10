import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

function Button({ title, onPress, children }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({});

export default Button;