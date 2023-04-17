/*
* File: App.js
* Author: Tóth Júlia
* Copyright: 2023, Tóth Júlia
* Date: 2023-04-17
* Group: Szoft 2 N
* Github: https://github.com/haribomaci/
* Licenc: GNU GPL
*
*/


import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  const [firstClass, setFirstClass] = useState('');
  const [secondClass, setSecondClass] = useState('');
  const [total, setTotal] = useState(0);
  const [firstClassPercent, setFirstClassPercent] = useState(0);
  const [secondClassPercent, setSecondClassPercent] = useState(0);

  const calculatePercentages = () => {
    const firstClassNum = parseInt(firstClass);
    const secondClassNum = parseInt(secondClass);
    const totalNum = firstClassNum + secondClassNum;
    const firstClassPercentNum = (firstClassNum / totalNum) * 100;
    const secondClassPercentNum = (secondClassNum / totalNum) * 100;
    setTotal(totalNum);
    setFirstClassPercent(firstClassPercentNum);
    setSecondClassPercent(secondClassPercentNum);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.about}>Tóth Júlia, 2023-04-17, szoft 2/n</Text>
      <Text style={styles.title}>Almák számlálása</Text>
      <Text style={styles.text}>Első osztályú almák: </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setFirstClass}
        value={firstClass}
      />
      <Text style={styles.text}>Másod osztályú almák: </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setSecondClass}
        value={secondClass}
      />
      <Button style={styles.button} title="Számítás" onPress={calculatePercentages} />
      <Text>Összes alma: {total}</Text>
      <Text>Első osztályú almák: {firstClassPercent.toFixed(2)}%</Text>
      <Text>Másod osztályú almák: {secondClassPercent.toFixed(2)}%</Text>

      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  about: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'yellow'
  },
  button: {
    color: 'green'
  },
});
export default App;
