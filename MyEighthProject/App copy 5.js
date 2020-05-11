import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker' //install expo-image-picker

export default function App() {
  
  const[selectedImage, setSelectedImage] = React.useState(null)

  let openImagePickerAsync = async () => {

    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false){
      
      alert('Permission is require!');
      return;

    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({localUri: pickerResult.uri});
  };

  if (selectedImage !== null) {
    return(
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.setImage} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      
      <Image  source={{uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png'}}
              style={styles.logo} />
      
      <Text style={styles.insts}>
        Press the button below to select an image on your phone!
      </Text>
    

      <TouchableOpacity
      style={styles.button}
      onPress={openImagePickerAsync}>
        <Text style={styles.buttonText}>
          Pick Image
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttonReset}>
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },

  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },

  buttonReset: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 5,
  },

  insts: {
    fontSize: 18,
    color: '#87CEFA',
    marginHorizontal: 15,
    marginBottom: 10,
  },

  logo: {
    width: 310,
    height: 300,
    marginBottom: 20
  },

  buttonText: {
    fontSize: 20,
    color: 'white',
  },

  setImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  }
});
