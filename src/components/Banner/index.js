import { useState } from "react";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
  const [page, setPage] = useState(0);

  const onPageSelected = (e) => {
    setPage(e.nativeEvent.position);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>A Grandeza dos Reinos</Text>
      <Text style={styles.descriptionText}>
        Explore a rica tapeçaria dos reinos, onde história e tradição se entrelaçam
        para formar a identidade cultural de nações. Cada reinado traz consigo contos
        de liderança, legado e a busca pela harmonia entre passado e futuro.
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
        <View style={[styles.bullet, page === 0 && styles.activeBullet]} />
        <View style={[styles.bullet, page === 1 && styles.activeBullet]} />
        <View style={[styles.bullet, page === 2 && styles.activeBullet]} />
      </View>

      {/* Seção de História e Cultura */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>História e Cultura dos Reinos</Text>
        <Text style={styles.sectionText}>
          Os reinos desempenharam um papel crucial no desenvolvimento das sociedades
          ao longo dos séculos. De antigos impérios a monarquias modernas, cada reino tem
          uma rica tapeçaria de cultura, arte e tradições que moldaram o mundo como o conhecemos.
        </Text>
        <Text style={styles.sectionText}>
          O Reino Unido, por exemplo, tem uma história de monarquias que remonta a mais de mil anos, com 
          eventos históricos que influenciaram a política, a economia e a cultura de várias nações. 
          A arte, a literatura e a arquitetura deste reino continuam a fascinar o mundo.
        </Text>
      </View>

      {/* Lista de Reinos Famosos */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Reinos Famosos</Text>
        <Text style={styles.listItem}>- Reino Unido</Text>
        <Text style={styles.listItem}>- Reino da Suécia</Text>
        <Text style={styles.listItem}>- Reino da Bélgica</Text>
        <Text style={styles.listItem}>- Império Romano</Text>
        <Text style={styles.listItem}>- Império Chinês</Text>
        <Text style={styles.listItem}>- Reino do Japão</Text>
        <Text style={styles.listItem}>- Reino da França</Text>
      </View>

      {/* Citação Inspiradora */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sabedoria Real</Text>
        <Text style={styles.quote}>
          "O verdadeiro poder de um rei não está na força de seu exército, mas na sabedoria com que governa seu povo."
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9", // Cor de fundo suave
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
    color: "#8B0000",
    textShadowColor: "#fff", // Sombra do texto
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6,
    fontFamily: "serif",
  },
  descriptionText: {
    fontSize: 16,
    textAlign: "center",
    color: "#777",
    marginBottom: 18,
    lineHeight: 24,
    fontStyle: "italic",
    fontFamily: "serif",
  },
  content: {
    height: 270,
    width: "100%",
    borderRadius: 15,
    overflow: "hidden",
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    transform: [{ scale: 1.05 }],
  },
  bulletContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingBottom: 30,
  },
  bullet: {
    width: 14,
    height: 14,
    borderRadius: 7,
    margin: 6,
    backgroundColor: "#8B0000",
    opacity: 0.6,
  },
  activeBullet: {
    backgroundColor: "#000",
    transform: [{ scale: 1.4 }],
    opacity: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    resizeMode: "cover",
  },
  section: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#8B0000",
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "serif",
  },
  sectionText: {
    fontSize: 16,
    color: "#555",
    textAlign: "justify",
    lineHeight: 22,
    marginBottom: 10,
    fontFamily: "serif",
  },
  listItem: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
    fontFamily: "serif",
  },
  quote: {
    fontSize: 18,
    fontStyle: "italic",
    color: "#555",
    textAlign: "center",
    marginTop: 10,
    fontFamily: "serif",
  },
});