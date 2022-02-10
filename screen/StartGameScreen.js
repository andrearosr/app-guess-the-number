import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native'
import Card from '../components/Card'
import Button from '../components/Button';
import Input from '../components/Input'
import Colors, { globalStyles } from '../constants/Colors';

function StartGameScreen() {
  const [enteredValue, setEnteredValue] = useState('');

  const handleChangeText = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ''))
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <Text style={styles.title}>Comenzar Juego</Text>
        <Card style={styles.inputContainer}>
          <Text>Elija un número</Text>
          <Input
            blurOnSubmit
            autoCapitalization="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            value={enteredValue}
            onChangeText={handleChangeText}
          />
          <View style={styles.buttonContainer}>
            <Button color={Colors.accent} title="Limpiar" onPress={() => { }} />
            <Button color={Colors.primary} title="Confirmar" onPress={() => { }}>
              <Text>👏</Text>
            </Button>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
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
    ...globalStyles.centered,
    width: 300,
    maxWidth: '80%',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
})

export default StartGameScreen