const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f5f5f5",
      padding: 20,
    },
    header: {
      fontSize: 26,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 20,
      color: "#8B0000",
    },
    description: {
      fontSize: 16,
      textAlign: "center",
      marginBottom: 20,
      color: "#555",
    },
    item: {
      marginBottom: 30,
      padding: 15,
      backgroundColor: "white",
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    },
    itemTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
      color: "#8B0000",
    },
    itemDescription: {
      fontSize: 16,
      marginBottom: 10,
      color: "#555",
    },
    image: {
      width: "100%",
      height: 200,
      borderRadius: 10,
      marginBottom: 15,
    },
    buttonContainer: {
      marginTop: 10,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    button: {
      width: "30%",
      backgroundColor: "#8B0000",
      borderRadius: 20,  // Aumenta o borderRadius para tornar os botões arredondados
      paddingVertical: 10, // Ajusta o padding para melhorar a aparência
      paddingHorizontal: 5, // Ajusta o padding horizontal para aumentar o tamanho do botão
      marginBottom: 10,
    },
  });
  
