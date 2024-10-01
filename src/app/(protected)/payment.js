import { router } from "expo-router";
import { useState } from "react";
import { Text, View, StyleSheet, InputAccessoryView} from "react-native";
import { TextInput } from "react-native-gesture-handler";


export default function Payment() {
    const [valor, setValor] = useState("0,00");
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.InputView}>
                <TextInput placeholder="Valor" keyboardType="decimal-pad" style={styles.inputValor} />
            </View>
            <View style={styles.InputView}>
                <TextInput placeholder="Usuario"/>
            </View>
            <View style={styles.InputView}>
                <TextInput placeholder="Data" />
            </View>
            <View style={styles.InputView}>
                <TextInput placeholder="Observações" />
            </View>
            <View style={styles.contentButtons}>
               <Button title="Salvar"/>
               <Button title="Continuar"/>
               <Button title="Cancelar" onPress={() => router.back()}/>
            </View>
        </View>
        
        
        
  );
}

const styles = StyleSheet.create({
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
    },
    InputView: {
       borderColor: "black",
       borderWidth: 1,
       width: "100%",
       margin: 10,
    },
    contentButtons: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-around",
    },
    inputValor: {
        textAlign: "right",

    }
});