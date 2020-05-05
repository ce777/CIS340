import React from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';

export default function App() {
  
  const csulogo = {
    uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png',
  };

  return (
    <View style={styles.container}>
      <Text>CSU Logos</Text>

      <Image
        style={styles.localCSULogo}
        source={require('./assets/logo.png')}
      />

      <Image
        style={styles.urlCSULogo}
        source={{
          uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png'
        }}
      />

      <Image 
      style={styles.stretch} 
      source={csulogo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center'
  },

  localCSULogo: {
    width: 55,
    height: 65
  },

  urlCSULogo: {
    width: 50,
    height: 60
  },

  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'center'
  }
});
