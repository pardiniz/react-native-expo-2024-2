import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from "react-native";

export default function MariaAntonieta() {
  const movieDetails = {
    title: "Maria Antonieta (2006)",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*lu1_2mF_IXfKYzHT3qmifg.jpeg",
    description: "O filme 'Maria Antonieta' de Sofia Coppola é uma interpretação estilizada da vida da rainha da França, desde sua juventude até sua execução durante a Revolução Francesa. Com uma estética moderna e uma trilha sonora marcante, o filme aborda as dificuldades e luxos de sua vida na corte francesa.",
    director: "Sofia Coppola",
    starring: "Kirsten Dunst, Jason Schwartzman, Rip Torn",
    netflixLink: "https://www.netflix.com/title/70053351",
  };

  const monarchDetails = {
    name: "Maria Antonieta",
    reignPeriod: "1774–1792",
    imageUrl: "https://wp.thecollector.com/wp-content/uploads/2021/10/marie-antoinette-young-guillotine.jpg",
    description: "Maria Antonieta foi uma rainha da França, esposa do Rei Luís XVI. Ela é muitas vezes lembrada por seu estilo de vida extravagante, que contrastava fortemente com a pobreza do povo francês. Sua morte na guilhotina durante a Revolução Francesa simbolizou o fim da monarquia francesa.",
    achievements: [
      "Promoveu as artes e a moda francesa",
      "Representou a decadência da monarquia francesa",
      "Executada durante a Revolução Francesa"
    ],
    famousQuotes: [
      "Let them eat cake.",
      "I have seen all, I have done all."
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Maria Antonieta</Text>
      
      <Image source={{ uri: monarchDetails.imageUrl }} style={styles.image} />
      
      <Text style={styles.reignPeriod}>Período de Reinado: {monarchDetails.reignPeriod}</Text>
      <Text style={styles.description}>{monarchDetails.description}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conquistas e Legado</Text>
        <View style={styles.achievementsList}>
          {monarchDetails.achievements.map((achievement, index) => (
            <Text key={index} style={styles.achievement}>- {achievement}</Text>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Frases Famosas</Text>
        <View style={styles.quotesList}>
          {monarchDetails.famousQuotes.map((quote, index) => (
            <Text key={index} style={styles.quote}>“{quote}”</Text>
          ))}
        </View>
      </View>

      <Text style={styles.movieTitle}>Sobre o Filme: {movieDetails.title}</Text>
      <Image source={{ uri: movieDetails.imageUrl }} style={styles.movieImage} />
      <Text style={styles.movieDescription}>{movieDetails.description}</Text>
      <Text style={styles.movieDetails}>
        Diretor: {movieDetails.director} | Estrelando: {movieDetails.starring}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL(movieDetails.netflixLink)}
      >
        <Text style={styles.buttonText}>Assistir na Netflix</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f1f1f1', // Suave, fundo de tom claro para contraste
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#800000', // Vermelho profundo para elegância
    fontFamily: 'serif',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6.68,
    elevation: 10,
  },
  reignPeriod: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 30,
    lineHeight: 24,
    textAlign: 'justify',
    fontFamily: 'Arial',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  achievementsList: {
    marginLeft: 15,
    marginBottom: 15,
  },
  achievement: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  quotesList: {
    marginLeft: 15,
  },
  quote: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#8e44ad',
    marginBottom: 10,
    textAlign: 'center',
  },
  movieTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '##800000', // Vermelho vibrante para destacar o filme
    marginTop: 30,
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'serif',
  },
  movieImage: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6.68,
    elevation: 10,
  },
  movieDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    lineHeight: 24,
    fontFamily: 'Arial',
  },
  movieDetails: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  button: {
    paddingVertical: 16,
    backgroundColor: '#800000', // Cor de fundo que remete à realeza
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#800000',
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
