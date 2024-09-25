import { router } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sobre</Text>
            <View style={styles.box}>
                <Text style={styles.subtitle}>Sobre Mim</Text>
                <Text style={styles.description}>
                    Olá! Eu sou Beatriz Pardini, tenho 17 anos e sou estudante da Etec Professor Milton Gazzetti e faço o curso de Informática para Internet.
                </Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.subtitle}>Finalidade do Aplicativo</Text>
                <Text style={styles.description}>
                    Este aplicativo foi desenvolvido para prestar informações sobre os principais reinos atuais.
                </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => { router.replace("/") }}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: '#f8f9fa', // Cor de fundo leve
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    box: {
        width: '100%',
        padding: 15,
        marginBottom: 15,
        backgroundColor: '#FFB6C1', // Cor das caixas
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2, // Sombreamento no Android
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#FF69B4', // Cor de fundo do botão
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#000', // Cor do texto
        fontSize: 16,
        textAlign: 'center',
    },
});

