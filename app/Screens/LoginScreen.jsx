import { View, Text } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import React from "react";


export default function LoginScherm({navigation}){
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

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
    },
    registreerText: {
      alignSelf:"center",
      marginHorizontal: 20,
      marginTop: 40
    }
  });

  function Login(email, password){
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const userId = userCredential.user.uid;
      console.log(userId);
      navigation.navigate("Home", {userId: userId});
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });


  }
  

  return(
    <View style={styles.container}>
      <View style={styles.filler}></View>
      <View style={styles.form}>
        <TextInput style={styles.formInput} label="Email" value={email} onChangeText={mail => setEmail(mail)} keyboardType="email-address"></TextInput>
        <TextInput style={styles.formInput} label="Password" value={pass} onChangeText={pass => setPass(pass)} secureTextEntry={true}></TextInput>
        <Button style={styles.button} mode="contained" onPress={() => Login(email, pass)}>Log In</Button>

        <Text style={styles.registreerText}>Nog geen account?</Text>
        <Button style={styles.formInput} mode="contained" onPress={() => navigation.navigate("Register")}>Registreer</Button>
      </View>
      <View style={styles.filler}></View>
    </View>
  );
}