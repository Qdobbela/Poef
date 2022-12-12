import React from "react";
import { View } from "native-base";
import { StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useUser } from "../Repo/useUser";
import getIndex from "../Repo/getIndex";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export default function AddDrinkScreen({navigation, route}){
  const [price, setPrice] = React.useState(isNaN(route.params?.price) ? "" : "" + route.params?.price)
  const [amount, setAmount] = React.useState(isNaN(route.params?.amount) ? "" : "" + route.params?.amount)
  const [percentage, setPercentage] = React.useState(isNaN(route.params?.percentage) ? "" : "" + route.params?.percentage)
  const [name, setName] = React.useState();
  const [place, setPlace] = React.useState();
  const user = useUser()[0];

  async function post(){
    const index = getIndex(price, amount, percentage)
    console.log(index);
    console.log(user);
    try {
      const docRef = await addDoc(collection(db, "Indexes"), {
        user: user,
        name: name,
        place: place,
        price: price,
        amount: amount,
        percentage: percentage,
        index: index
      });
      console.log("Document written with ID: ", docRef.id);
      navigation.popToTop();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
  }

  return(
    <View style={styles.container}>
      <View style={styles.filler}></View>
      <View style={styles.form}>
        <TextInput label="Naam drankje" style={styles.input} onChangeText={(value) => setName(value)}></TextInput>
        <TextInput label="Plaats" style={styles.input} onChangeText={(value) => setPlace(value)}></TextInput>
        <TextInput keyboardType='numeric' returnKeyType="done" label="Prijs" style={styles.input} defaultValue={price} onChangeText={(value) => setPrice(value)} ></TextInput>
        <TextInput keyboardType='numeric' returnKeyType="done" label="Aantal cl" style={styles.input} defaultValue={amount} onChangeText={(value) => setAmount(value)} ></TextInput>
        <TextInput keyboardType='numeric' returnKeyType="done" label="Alcoholpercentage" style={styles.input} defaultValue={percentage} onChangeText={(value) => setPercentage(value)} ></TextInput>
        <Button mode="contained"  style={styles.input} onPress={post}>Opslaan</Button>
      </View>
      <View style={styles.filler}></View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filler: {
    flex: 1
  },
  form:{
    flex: 6,
    alignItems:"center"
  },
  input: {
    margin: 20,
    width: 260,
  }
});