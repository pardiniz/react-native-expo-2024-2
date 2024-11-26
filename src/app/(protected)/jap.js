import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

export default function List() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Reino do Japão</Text>
      
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Bandeira do Japão</Text>
        <Text style={styles.description}>
          A bandeira do Japão, também conhecida como "Nisshōki", apresenta um círculo vermelho que representa o Sol nascente, simbolizando a relação histórica do Japão com o Sol.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Tokyo_Montage_2014.png' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Tóquio</Text>
        <Text style={styles.description}>
          Tóquio, a capital do Japão, é uma megacidade vibrante, conhecida por sua mistura única de modernidade e tradições antigas, com arranha-céus futuristas e templos históricos.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/TokyoImperialPalace.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Palácio Imperial de Tóquio</Text>
        <Text style={styles.description}>
          O Palácio Imperial de Tóquio é a residência oficial da Família Imperial Japonesa, situado no centro de Tóquio, sendo um símbolo de continuidade e estabilidade para o povo japonês.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Emperor_Akihito_of_Japan.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Emperador Akihito</Text>
        <Text style={styles.description}>
          O Imperador Akihito foi o 125º imperador do Japão e governou de 1989 até sua abdicação em 2019, marcando uma era de modernização e esforços para reconciliar o Japão com seu passado.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Empress_Michiko_2007.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Imperatriz Michiko</Text>
        <Text style={styles.description}>
          A Imperatriz Michiko, esposa do Imperador Akihito, foi a primeira mulher comum a se casar com um membro da Família Imperial do Japão, desempenhando um papel fundamental em várias causas sociais.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Prince_Naruhito_2006.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Príncipe Naruhito</Text>
        <Text style={styles.description}>
          O Príncipe Naruhito, filho do Imperador Akihito, ascendeu ao trono imperial em 2019, após a abdicação de seu pai, marcando o início da era Reiwa no Japão.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Fuji_2017.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Monte Fuji</Text>
        <Text style={styles.description}>
          O Monte Fuji, o pico mais alto do Japão, é um símbolo icônico do país. Conhecido por sua beleza majestosa, é um destino popular para turistas e peregrinos.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Fushimi_Inari_Taisha_-_Torii_Gates.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Fushimi Inari Taisha</Text>
        <Text style={styles.description}>
          O Fushimi Inari Taisha, localizado em Kyoto, é um dos santuários mais famosos do Japão, conhecido por seus milhares de portões vermelhos (torii) que levam até o topo da montanha Inari.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Japanese_tea ceremony.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Cerimônia do Chá</Text>
        <Text style={styles.description}>
          A cerimônia do chá japonesa, também conhecida como "chanoyu", é uma prática tradicional que enfatiza a estética, a simplicidade e a espiritualidade no ato de preparar e beber chá verde.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Japanese_sushi.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Sushi Japonês</Text>
        <Text style={styles.description}>
          O sushi, prato tradicional japonês à base de arroz temperado com vinagre e peixe cru, é um dos alimentos mais famosos e apreciados mundialmente, refletindo a rica cultura gastronômica do Japão.
        </Text>
      </View>

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
    color: '#800000'
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
});
