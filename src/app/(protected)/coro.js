import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from "react-native";

export default function CoroasESeries() {
  const series = [
    {
      title: "The Crown",
      imageUrl: "https://veja.abril.com.br/wp-content/uploads/2016/12/seriado-the-crown.jpg?crop=1&resize=1212,909",
      description: "A série retrata a vida da Rainha Elizabeth II e os eventos históricos que marcaram seu reinado.",
      netflixLink: "https://www.netflix.com/title/80025678"
    },
    {
      title: "Victoria",
      imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/c12bd8bf1d1351f1204c6ca6ef08c28033afc4b824e0ee0477843deb35fa1821._SX1080_FMjpg_.jpg",
      description: "A série segue a ascensão e o reinado da Rainha Vitória da Inglaterra.",
      netflixLink: "https://www.netflix.com/title/80176066"
    },
    {
      title: "The Last Kingdom",
      imageUrl: "https://curtamais.com.br/goiania/wp-content/uploads/sites/2/2024/04/the-last-kingdom_1.jpg",
      description: "Baseada na série de livros de Bernard Cornwell, essa série segue a luta pela unificação da Inglaterra durante a Idade Média.",
      netflixLink: "https://www.netflix.com/title/80074224"
    },
    {
      title: "Reign",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRvU6l1WkjxbBc6Mk2dQpWJh4avIOm2ey_wQ&s",
      description: "A série segue a vida de Mary, Rainha da Escócia, desde sua juventude até os complexos conflitos de seu reinado.",
      netflixLink: "https://www.netflix.com/title/70306261"
    },
    {
      title: "The White Queen",
      imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/51b82df33fc423310950b6c67bd42293d228311c26f2d4e3cb482529cde416c5._SX1080_FMjpg_.jpg",
      description: "A história se passa durante a Guerra das Rosas, com foco nas mulheres que brigaram pelo trono da Inglaterra.",
      netflixLink: "https://www.netflix.com/title/70291285"
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Coroas e Séries</Text>
      
      {series.map((serie, index) => (
        <View key={index} style={styles.card}>
          <Image 
            source={{ uri: serie.imageUrl }} 
            style={styles.image} 
          />
          <Text style={styles.subtitle}>{serie.title}</Text>
          <Text style={styles.description}>{serie.description}</Text>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Linking.openURL(serie.netflixLink)}
          >
            <Text style={styles.buttonText}>Assistir na Netflix</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#800000',
  },
  card: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    marginTop: 10,
    paddingVertical: 12,
    backgroundColor: '#800000',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
