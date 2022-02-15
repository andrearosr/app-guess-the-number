import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

function GameScreen({ userNumber }) {
  return (
    <View>
      <Text>Game Screen {userNumber}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default GameScreen