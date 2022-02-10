import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Card from '../components/Card'
import Button from '../components/Button';

function StartGameScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Comenzar Juego</Text>
      <Card style={styles.inputContainer}>
        <Text>Elija un número</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Limpiar" onPress={() => { }} />
          <Button title="Confirmar" onPress={() => { }}>
            <Text>👏</Text>
          </Button>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    padding: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
})

export default StartGameScreen