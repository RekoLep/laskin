import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const addNumbers = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  const subtractNumbers = () => {
    const diff = parseFloat(num1) - parseFloat(num2);
    setResult(diff);
  };

  return (
    <View style={styles.container}>
      {result !== null && (
        <Text style={styles.result}>Result: {result}</Text>
      )}

      <TextInput
        placeholder="Enter first number"
        value={num1}
        onChangeText={text => setNum1(text)}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        placeholder="Enter second number"
        value={num2}
        onChangeText={text => setNum2(text)}
        keyboardType="numeric"
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <Button title="+" onPress={addNumbers} />
        <Button title="-" onPress={subtractNumbers} />
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginBottom: 20,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
