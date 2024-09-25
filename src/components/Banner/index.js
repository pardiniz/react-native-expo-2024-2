import { useState } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
  const [page, setPage] = useState(0);

  const onPageSelected = (e) => {
    setPage(e.nativeEvent.position);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        A Grandeza dos Reinos
      </Text>
      <Text style={styles.descriptionText}>
        Explore a rica tapeçaria dos reinos, onde história e tradição se entrelaçam para formar a identidade cultural de nações. Cada reinado traz consigo contos de liderança, legado e a busca pela harmonia entre passado e futuro.
      </Text>
      
      <PagerView
        initialPage={0}
        style={styles.content}
        onPageSelected={onPageSelected}
      >
        <View key="1" style={styles.page}>
          <Image 
            source={require("../../assets/Images/reino_elizabeth_fam.png")}
            style={styles.image}
          />
        </View>
        <View key="2" style={styles.page}>
          <Image 
            source={require("../../assets/Images/reino_suecia.jpg")}
            style={styles.image}
          />
        </View>
        <View key="3" style={styles.page}>
          <Image 
            source={require("../../assets/Images/reino_belgica.jpg")}
            style={styles.image}
          />
        </View>
      </PagerView>
      <View style={styles.bulletContent}>
        <View style={[styles.bullet, page === 0 && styles.activeBullet]}></View>
        <View style={[styles.bullet, page === 1 && styles.activeBullet]}></View>
        <View style={[styles.bullet, page === 2 && styles.activeBullet]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    padding: 20,
    backgroundColor: '#f0f0f0', // Fundo suave
    borderRadius: 15, // Bordas arredondadas no contêiner
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Sombra para Android
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#8B0000',
    textShadowColor: '#fff', // Sombra do texto
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
    lineHeight: 22, // Aumenta o espaço entre linhas
    fontStyle: 'italic', // Estilo de fonte itálico
  },
  content: {
    height: 250, // Aumentado para mais espaço
    width: "100%",
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    borderRadius: 10, // Bordas arredondadas
    overflow: 'hidden', // Esconde partes que ultrapassam o limite
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3, // Sombra para Android
  },
  bulletContent: { 
    flexDirection: "row", 
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingBottom: 20,
  },
  bullet: {
    width: 12,
    height: 12,
    borderRadius: 6,
    margin: 5,
    backgroundColor: "#8B0000",
    opacity: 0.7,
  },
  activeBullet: {
    backgroundColor: "#000",
    transform: [{ scale: 1.3 }], // Aumenta o tamanho do ponto ativo
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
});
