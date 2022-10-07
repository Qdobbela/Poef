import React from "react";
import { Text, View } from "react-native";
import { TextInput } from 'react-native-paper';

function checkIfDouble(string, onChangeText){
  string = string.replace(",",".")
  if(!isNaN(string)){
    onChangeText(parseFloat(string));
  }
}

export default function Inputfield(props) {
  return (
      <TextInput keyboardType='numeric' returnKeyType="done" style={{alignSelf: 'center', margin: 5, width: 300}} label={`${props.name}`} onChangeText={text => checkIfDouble(text, props.onChangeText)}/>
  );
}