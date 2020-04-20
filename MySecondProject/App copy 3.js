import React from 'react';
import {Text, TextInput, View } from 'react-native';

export default function MyApp() {
  return (
      <View>
      <Text>
        {"\n\n\n\n\n\n\n\n\n"}
        Hello I am a Student in CIS340! {"\n"}
      </Text>
      <TextInput 
      style={{
      height: 40,
      borderColor: "gray",
      borderWidth: 1
      }} 
      defaultValue="Enter your input!"/>
      </View>
  );
}
