import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";

export default function SavedScreen(){

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  })

  return(
    <View style={styles.container}>
      <Button mode="contained">Drankje Toevoegen</Button>
      <Text>Hier komen de opgeslagen drankjes met index</Text>
    </View>
  );
}