import { router } from "expo-router";
import { useState } from "react";
import { Text, View, StyleSheet, InputAccessoryView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Payment() {
  const [valor, setValor] = useState("0,00");
  const [sugestoes, setSugestoes] = useState(
    {
      id: 1,
      nome: "Vittorio Garnson",
    },
    {
      id: 2,
      nome: "Zeke Lorek",
    },
    {
      id: 3,
      nome: "Edie McOrkil",
    },
    {
      id: 4,
      nome: "Madella Sambles",
    },
    {
      id: 5,
      nome: "Nolie Morrel",
    },
    {
      id: 6,
      nome: "Rustin Skully",
    },
    {
      id: 7,
      nome: "Stephana Lockton",
    },
    {
      id: 8,
      nome: "Hamil Worton",
    },
    {
      id: 9,
      nome: "Gregor Edden",
    },
    {
      id: 10,
      nome: "Merle Siddele",
    },
    {
      id: 11,
      nome: "Byram Hourihane",
    },
    {
      id: 12,
      nome: "Jeanelle Reddy",
    },
    {
      id: 13,
      nome: "Newton Casiroli",
    },
    {
      id: 14,
      nome: "Piper Simonian",
    },
    {
      id: 15,
      nome: "Kalindi Mattisson",
    },
    {
      id: 16,
      nome: "Kordula De Matteis",
    },
    {
      id: 17,
      nome: "Joellyn Eastman",
    },
    {
      id: 18,
      nome: "Ki Winsborrow",
    },
    {
      id: 19,
      nome: "Bellina Bedinham",
    },
    {
      id: 20,
      nome: "Addie Duncan",
    },
    {
      id: 21,
      nome: "Deck Frane",
    },
    {
      id: 22,
      nome: "Katey Dobby",
    },
    {
      id: 23,
      nome: "Dalila Kirtley",
    },
    {
      id: 24,
      nome: "Jaquith Sineath",
    },
    {
      id: 25,
      nome: "Scot Annis",
    },
    {
      id: 26,
      nome: "Elfrida Widmore",
    },
    {
      id: 27,
      nome: "Emylee Verrill",
    },
    {
      id: 28,
      nome: "Waneta Hiner",
    },
    {
      id: 29,
      nome: "Paco Avesque",
    },
    {
      id: 30,
      nome: "Viki Wrigley",
    },
    {
      id: 31,
      nome: "Lorens Gherardi",
    },
    {
      id: 32,
      nome: "Phil Aleevy",
    },
    {
      id: 33,
      nome: "Georgy Cuchey",
    },
    {
      id: 34,
      nome: "Olimpia Pawelski",
    },
    {
      id: 35,
      nome: "Rivy Dorrell",
    }
  );
  const [id, setId] = useState(1);
  const [data, setData] = useState(new Date());
  const [viewCalendar, setViewCalendar] = useState(false);
  const [observacoes, setObservacao] = useState("");

  const handleCalendar = (event, selectedDate) => {
    setData(selectDate);
    setViewCalendar(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Inserir Pagamentos</Text>
      <View style={styles.InputView}>
        <Ionicons name="wallet-outline" size={24} color="black" />
        <TextInput
          placeholder="Valor"
          keyboardType="decimal-pad"
          style={styles.inputValor}
          value={valor}
          onChangeText={setValor}
        />
      </View>
      <View style={styles.InputView}>
        <Picker
          selectedValue={id}
          onValueChange={(itemValue, index) => {
            setId(itemValue);
          }}
          style={{ width: "100%" }}
        >
          {sugestoes?.map(() => {
            return (
              <Picker.Item key={item.id} label={item.nome} value={item.id} />
            );
          })}
        </Picker>
        <Text
          onPress={() => setViewCalendar(true)}
          style={styles.inputObservacao}
          value={observacao}
          onChangeText={setObservacao}
          multiline={true}
        >
          {data.toLocaleDateString().split("T")[0]}
        </Text>
        {viewCalendar && (
          <DateTimePicker
            value={data}
            onChange={handleCalendar}
            mode="date"
            testID="dateTimePicker"
          />
        )}

        <TextInput placeholder="Usuario" />
      </View>
      <View style={styles.InputView}>
        <TextInput placeholder="Data" />
      </View>
      <View style={styles.InputView}>
        <TextInput placeholder="Observações" />
      </View>
      <View style={styles.contentButtons}>
        <Button title="Salvar" />
        <Button title="Continuar" />
        <Button title="Cancelar" onPress={() => router.back()} />
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
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  contentButtons: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-around",
  },
  inputValor: {
    flex: 1,
    textAlign: "right",
    padding: 10,
  },
  inputData: {
    width: "100%",
    textAlign: "center",
    fontFamily: "regular",
    fontSize: 20,
    padding: 10,
  },
  inputObservacao: {
    fontFamily: "regular",
    fontSize: 16,
    flex: 1,
    lineHeight: 20,
  },
});
