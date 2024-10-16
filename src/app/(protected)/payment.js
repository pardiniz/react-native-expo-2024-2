import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { z } from "zod";

const paymentSchema = z.object({
  valor_pago: z.number().gt(0),
  user_id: z.number().int().positive(),
  user_cadastro: z.number().int().positive(),
  data_vencimento: z.date(),
});

export default function Payment() {
  const [valor, setValor] = useState("0,00");
  const [sugestoes, setSugestoes] = useState([
    { id: 1, nome: "Vittorio Garnson" },
    { id: 2, nome: "Zeke Lorek" },
    { id: 3, nome: "Edie McOrkil" },
    { id: 4, nome: "Madella Sambles" },
    { id: 5, nome: "Nolie Morrel" },
    { id: 6, nome: "Rustin Skully" },
    { id: 7, nome: "Stephana Lockton" },
    { id: 8, nome: "Hamil Worton" },
    { id: 9, nome: "Gregor Edden" },
    { id: 10, nome: "Merle Siddele" },
    { id: 11, nome: "Byram Hourihane" },
    { id: 12, nome: "Jeanelle Reddy" },
    { id: 13, nome: "Newton Casiroli" },
    { id: 14, nome: "Piper Simonian" },
    { id: 15, nome: "Kalindi Mattisson" },
    { id: 16, nome: "Kordula De Matteis" },
    { id: 17, nome: "Joellyn Eastman" },
    { id: 18, nome: "Ki Winsborrow" },
    { id: 19, nome: "Bellina Bedinham" },
    { id: 20, nome: "Addie Duncan" },
    { id: 21, nome: "Deck Frane" },
    { id: 22, nome: "Katey Dobby" },
    { id: 23, nome: "Dalila Kirtley" },
    { id: 24, nome: "Jaquith Sineath" },
    { id: 25, nome: "Scot Annis" },
    { id: 26, nome: "Elfrida Widmore" },
    { id: 27, nome: "Emylee Verrill" },
    { id: 28, nome: "Waneta Hiner" },
    { id: 29, nome: "Paco Avesque" },
    { id: 30, nome: "Viki Wrigley" },
    { id: 31, nome: "Lorens Gherardi" },
    { id: 32, nome: "Phil Aleevy" },
    { id: 33, nome: "Georgy Cuchey" },
    { id: 34, nome: "Olimpia Pawelski" },
    { id: 35, nome: "Rivy Dorrell" },
  ]);
  const [id, setId] = useState(1);
  const [data, setData] = useState(new Date());
  const [viewCalendar, setViewCalendar] = useState(false);
  const [observacao, setObservacao] = useState("");
  const valueRef = useRef();

  const handleCalendar = (event, selectedDate) => {
    setData(selectedDate);
    setViewCalendar(false);
  };

  useEffect(() => {
    valueRef?.current.focus();
  }, []);

  constHandleChangeValor = (value) => {
    try {
      let valorLimpo = value.replace(",", "").replace(".", "");
      let valorConvertido = Number(valorLimpo) / 100;
      if (valorConvertido === 0 || isNaN(valorConvertido)) {
        setValor("0,00");
        return;
      }
      let valorPtBR = Int1.NumberFormat("pt-BR", {
        style: "decimal",
        minimumFractionDigitis: 2,
      }).format(valorConvertido);
      setValor(valorPtBR);
    } catch (error) {
      setValor("0,00");
    }
  };

const handleSubmit = async () => {
  const payment = {
    user_id: id,
    user_cadastro: 1,
    valor_pago: valor,
    data_pagamento: data,
  };

 try {

 } catch (error){
  const result = await paymentSchema.parseAsync(payment)
 }

};

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "android" ? "padding" : "height"}
    >
      <View style={styles.content}>
        <Text>Inserir Pagamentos</Text>
        <View style={styles.inputView}>
          <Ionicons name="wallet-outline" size={24} color="black" />
          <TextInput
            placeholder="Valor"
            keyboardType="decimal-pad"
            style={styles.inputValor}
            value={valor}
            onChangeText={(newValue) => constHandleChangeValor(newValue)}
            ref={valueRef}
          />
        </View>
        <View style={styles.inputView}>
          <Picker
            selectedValue={id}
            onValueChange={(itemValue) => setId(itemValue)}
            style={{ width: "100%" }}
          >
            {sugestoes.map((item) => (
              <Picker.Item key={item.id} label={item.nome} value={item.id} />
            ))}
          </Picker>
        </View>
        <View style={styles.inputView}>
          <Text onPress={() => setViewCalendar(true)} style={styles.inputData}>
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
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Observações"
            style={styles.inputObservacao}
            value={observacao}
            onChangeText={setObservacao}
            multiline={true}
          />
        </View>
        <View style={styles.contentButtons}>
          <Button title="Salvar" />
          <Button title="Continuar" />
          <Button title="Cancelar" onPress={() => router.back()} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  inputView: {
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
    fontSize: 20,
    padding: 10,
  },
  inputObservacao: {
    fontSize: 16,
    flex: 1,
    lineHeight: 20,
  },
});
