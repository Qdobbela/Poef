import { View, Text } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import React from "react";


export default function RegisterScreen({navigation}){
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [error, setError] = React.useState();
  const test = auth;

  const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    form: {
      flex: 3,
      width: 300,
      alignSelf: 'center',
      alignContent: 'center'
    },
    filler: {
      flex: 1,
    },
    formInput: {
      margin: 20
    },
    button: {
      margin: 20,
      marginTop: 60
    }
  });

  function Register(email, password){
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      navigation.popToTop();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorCode + ": " + errorMessage);
    });

  }
  
  if(error){
    <View style={styles.container}>
      <View style={styles.filler}></View>
      <View style={styles.form}>
        <TextInput style={styles.formInput} label="Email" value={email} onChangeText={mail => setEmail(mail)} keyboardType="email-address"></TextInput>
        <TextInput style={styles.formInput} label="Password" value={pass} onChangeText={pass => setPass(pass)} secureTextEntry={true}></TextInput>
        <Button style={styles.button} mode="contained" onPress={() => Register(email, pass)}>Registreer</Button>
        <Text>Er ging iets mis.</Text>
      </View>
      <View style={styles.filler}></View>
    </View>
  } else {
    return(
      <View style={styles.container}>
        <View style={styles.filler}></View>
        <View style={styles.form}>
          <TextInput style={styles.formInput} label="Email" value={email} onChangeText={mail => setEmail(mail)} keyboardType="email-address"></TextInput>
          <TextInput style={styles.formInput} label="Password" value={pass} onChangeText={pass => setPass(pass)} secureTextEntry={true}></TextInput>
          <Button style={styles.button} mode="contained" onPress={() => Register(email, pass)}>Registreer</Button>
        </View>
        <View style={styles.filler}></View>
      </View>
  )};
}