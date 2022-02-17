import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from './components/Header';
import StartGameScreen from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';
import Typography from './constants/Typography';
import Button from './components/Button';

export default function App() {
  const [loaded] = useFonts({
    Lato: require('./assets/fonts/Lato-Regular.ttf'),
    [Typography.titleFont]: require('./assets/fonts/Lato-Bold.ttf'),
  })
  const [userNumber, setUserNumber] = useState()
  const [userRounds, setUserRounds] = useState()

  if (!loaded) return <AppLoading />

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  const handleGameOver = rounds => {
    console.log('rounds', rounds)
    setUserRounds(rounds);
  }

  const handleResetGame = () => {
    setUserNumber();
    setUserRounds();
  }

  let content = <StartGameScreen onStartGame={handleStartGame} />

  if (userNumber) {
    content = <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />
  }

  if (userRounds) {
    content = (
      <View>
        <Text>Game over screen</Text>
        <Text>{userRounds} rondas</Text>
        <Text>El número era: {userNumber}</Text>
        <Button onPress={handleResetGame}>
          <Text>
            Volver a jugar
          </Text>
        </Button>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header title="Adivina el número" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
