import React, {Component, useState} from 'react';
import { Text, TextInput, View } from 'react-native';

export default function WordConverter() {
  
  const [text, setText]=useState('');
  return (
    <View style={{padding: 60}}>
      <TextInput
      style={{height: 40}}
      placeholder="Input Text Here"
      onChangeText={text => setText(text)}
      defaultValue={text}
      />
      <Text style={{padding: 10, fontSize:42}}>
        {text.split(' ').map((word) => word && '*').join('  ')}
      </Text>
    </View>
  );
}