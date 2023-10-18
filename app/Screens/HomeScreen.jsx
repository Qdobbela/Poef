import React from "react";
import { View } from "react-native";
import { Text, Surface } from 'react-native-paper';
import { Button } from "react-native-paper";
import { auth } from "../../firebaseConfig";
import Inputfield from "../components/menu/Inputfield";
import { useUser } from "../Repo/useUser";
import { signOut } from "firebase/auth";
import getIndex from "../Repo/getIndex";

export default function HomeScreen({navigation, route}){
  const [price, setPrice] = React.useState("");
  const [amountOfCl, setamountOfCl] = React.useState("");
  const [percentageAlcohol, setpercentageAlcohol] = React.useState("");
  const [userId] = useUser();
  var color = 'grey';

  function perc2color(perc) {
    var r, g, b = 0;
    if (perc > 0) {
      g = 255;
      r = Math.round((1-(perc/100))*255);
    } else if(perc > -100) {
      g = Math.round((perc/100)*255);
      r = 255;
    } else {
      r = 255;
      g = 0;
    }
    if(perc == 0){
      g = 255;
      r = 255;
    }
    var h = r * 0x10000 + g * 0x100 + b * 0x1;
    return color = ('#' + ('000000' + h.toString(16)).slice(-6));
  }

  return (
    <View style={{flex: 2}}>
      <View style={{flex: 2, justifyContent:'center', alignContent:'center'}} >
        <Inputfield name = "Prijs" onChangeText={setPrice}/>
        <Inputfield name = "Amount (in cl)" onChangeText={setamountOfCl}/>
        <Inputfield name = "Percentage of alcohol" onChangeText={setpercentageAlcohol} />
        <Button style={{alignSelf: 'center', width: 260, marginTop: 20, display: "none"}} mode="contained" onPress={() => navigation.navigate("Add", {price: price, amount: amountOfCl, percentage: percentageAlcohol})}>Opslaan</Button>
      </View>

      <View style={{flex: 2, justifyContent:'center', alignContent:'center'}}>
        <Surface style= {{width: 75, height: 75, justifyContent:'center', alignSelf: 'center', borderRadius: 20, backgroundColor: perc2color(getIndex(price,amountOfCl,percentageAlcohol))}}>
          <Text style={{alignSelf:'center', fontSize: 32}} >{getIndex(price,amountOfCl,percentageAlcohol)}</Text>
        </Surface>
      </View>

      <LoginButton userId={userId} navigation={navigation}></LoginButton>
    </View>
  );

}

function LoginButton(props){
  if(props.userId == undefined || props.userId == null){
    return(
    <View style={{flex: 1,alignSelf:'center', alignContent:'center', width: 300, display: "none"}}>
      <Button style={{alignSelf: 'center', width: 260}} mode="contained" onPress={() => props.navigation.navigate("Login")}>Log In</Button>
    </View>
  )} else {
    return(
      <View style={{flex: 1,alignSelf:'center', alignContent:'center', width: 300}}>
        <Button style={{alignSelf: 'center', width: 260, marginBottom: 20}} mode="contained" onPress={() => props.navigation.navigate("Saved")}>Bewaarde drankjes</Button>
        <Button style={{alignSelf: 'center', width: 260}} mode="contained" onPress={() => signOut(auth)}>Log Out</Button>
      </View>
    )
  }
}