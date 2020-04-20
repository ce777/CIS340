import React from 'react';
import {Text, View } from 'react-native';

export default function MyApp() {
  
  function getFullName(fName, mName, lName){
    return fName + " " + mName + " " + lName;
  }
  
  const pet = "Dog";
  return (
      <Text>
        {"\n\n\n\n\n\n\n\n\n"}
        Hello I am a Student in CIS340! {"\n"}
        My full name is {getFullName("Chase", "W", "Eslick")} {"\n"}
        I have a {pet}!
      </Text>
  );
}