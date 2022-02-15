import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Typography from '../constants/Typography';

function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={[styles.headerTitle, styles.latoFont]}>{title}</Text>
      <Text style={styles.latoFont}>Mi juego</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#50514f',
    fontSize: 22,
  },
  latoFont: {
    fontFamily: Typography.titleFont,
  }
})

export default Header;