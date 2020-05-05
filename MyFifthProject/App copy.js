import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.yellow}>Hello Yellow Text</Text>
      <Text style={styles.largeGreen}>Hello Large Green text</Text>
      <Text style={[styles.yellow, styles.largeGreen]}>Yellow Text, then Big Green</Text>
      <Text style={[styles.largeGreen, styles.yellow]}>Big Green, then yellow text </Text>
    </View>
  );
}

const styles = StyleSheet.create({

container: {
  marginTop: 70,
},

largeGreen: {
  color: 'green',
  fontWeight: 'bold',
  fontSize: 20,
},

yellow: {
  color: 'yellow',
  fontSize: 10,

}

}
); 