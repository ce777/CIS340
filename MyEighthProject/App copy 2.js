import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default class myApp extends Component {
  
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  onTap = () => {

    this.setState({
      count: this.state.count + 1
    });

  }

  onTapReset = () => {

    this.setState ({
      count: 0
    });

  }

  render() {
    const {count} = this.state;
    return (
      <View style={styles.container}>
        
        <View style={styles.counterText}>
          <Text>Tap Counter: {count}</Text>
        </View>

        <TouchableOpacity
        style={styles.button}
        onPress={this.onTap}>
          <Text>
            Touch Me
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.buttonReset}
        onPress={this.onTapReset}>
          <Text>
            Reset
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
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
