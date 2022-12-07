import React from "react";
import { View } from "react-native";
import { Text, Surface } from 'react-native-paper';
import Inputfield from "./app/components/menu/Inputfield";

export default function App() {
  const [price, setPrice] = React.useState("");
  const [amountOfCl, setamountOfCl] = React.useState("");
  const [percentageAlcohol, setpercentageAlcohol] = React.useState("");
  var color = 'grey';

  function getIndex(){
    index = (((price/percentageAlcohol)/amountOfCl)*100.00)
    if(isNaN(index)){
      return 0
    }
    result = ((50 - (index/1.92)*50)*2).toFixed(0)
    if(result == -0){
      return 0;
    } else {
      return result;
    }
  }

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
      <View style={{flex: 1, justifyContent:'center', alignContent:'center'}} >
        <Inputfield name = "Price" onChangeText={setPrice}/>
        <Inputfield name = "Amount (in cl)" onChangeText={setamountOfCl}/>
        <Inputfield name = "Percentage of alcohol" onChangeText={setpercentageAlcohol} />
      </View>

      <View style={{flex: 1, justifyContent:'center', alignContent:'center'}}>
        <Surface style= {{width: 75, height: 75, justifyContent:'center', alignSelf: 'center', borderRadius: 20, backgroundColor: perc2color(getIndex())}}>
          <Text style={{alignSelf:'center', fontSize: 32}} >{getIndex()}</Text>
        </Surface>
      </View>
    </View>
  );

}
