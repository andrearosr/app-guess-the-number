import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native'
import Card from '../components/Card'
import Button from '../components/Button';
import Input from '../components/Input'
import Colors, { globalStyles } from '../constants/Colors';

function StartGameScreen({ onStartGame }) {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeText = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ''))
  }

  const handleReset = () => {
    setEnteredValue('');
    setConfirmed(false);
    setSelectedNumber('');
    setErrorMessage('');
  }

  const handleConfirm = () => {
    const chosenNumber = parseInt(enteredValue)
    if (chosenNumber <= 0) {
      setErrorMessage('El número debe estar entre 1 y 99')
      return;
    };

    setConfirmed(true);
    setSelectedNumber(enteredValue);
    setEnteredValue('');
    setErrorMessage('')
  }

  const handleStartGame = () => onStartGame(selectedNumber)

  let errorOutput;
  if (errorMessage) {
    errorOutput = (
      <Card>
        <Text>{errorMessage}</Text>
      </Card>
    )
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
            <Button color={Colors.accent} title="Limpiar" onPress={handleReset} />
            <Button color={Colors.primary} title="Confirmar" onPress={handleConfirm}>
              <Text>👏</Text>
            </Button>
          </View>
        </Card>
        {confirmed ? (
          <Card>
            <Text>Numero elegido: {selectedNumber}</Text>
            <Button title="COMENZAR" onPress={handleStartGame} color={Colors.accent} />
          </Card>
         ) : null}
        {errorOutput}
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
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
})

export default StartGameScreen