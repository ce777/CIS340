import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function App() {
  
  const [count, setCount] = useState(0);
  
  const onTap = () => setCount(count => count +1);

  const onTapReset = () => setCount(count => 0);

  return (
    <View style={styles.container}>
      
      <View style={styles.counterText}>
        <Text>Tap Counter: {count}</Text>
      </View>

      <TouchableOpacity
      style={styles.button}
      onPress={onTap}>
        <Text>
          Touch Me
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttonReset}
      onPress={onTapReset}>
        <Text>
          Reset
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },

  button: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    color: 'white'
  },

  buttonReset: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
  },

  counterText: {
    alignItems: 'center',
    padding: 10,

  }
});
