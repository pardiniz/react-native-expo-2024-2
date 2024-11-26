import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

export default function List() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Reino da Bélgica</Text>
      
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1920px-Flag_of_Belgium.svg.png' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Bandeira da Bélgica</Text>
        <Text style={styles.description}>
          A bandeira da Bélgica, com suas três faixas verticais nas cores preta, amarela e vermelha, representa a independência e a unidade nacional do país.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPvHlHZFBC1mcbWjU2qEi0Y-4QzrBIAYf1A&s' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Bruxelas</Text>
        <Text style={styles.description}>
          Bruxelas, a capital da Bélgica, é uma cidade rica em história, cultura e arte, conhecida por suas praças, museus e pelo distrito da União Europeia.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Paleis_brussel2.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Palácio Real de Bruxelas</Text>
        <Text style={styles.description}>
          O Palácio Real de Bruxelas é a residência oficial da família real belga e um símbolo importante da monarquia no país.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy3A128cQxPUm4wZ-VN4RCkoUYIsec82OkQg&s' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Rei Filipe da Bélgica</Text>
        <Text style={styles.description}>
          O Rei Filipe da Bélgica ascendeu ao trono em 2013 e, desde então, tem desempenhado um papel importante como chefe de Estado e símbolo da unidade nacional.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGt_pwTDTzR5wrON4ZYC-RHXyUp4o8hJfwkA-a73g7m56FkTcqnFFOK3BJ9Q8RDXMGn78&usqp=CAU' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Princesa Mathilde</Text>
        <Text style={styles.description}>
          A Princesa Mathilde é esposa do Rei Filipe e desempenha um papel ativo em várias causas sociais e humanitárias na Bélgica e internacionalmente.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDqcDcthBlV9oga2xdGTPHQGI6mG6X-Tv-Qw&s' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Príncipe Laurent</Text>
        <Text style={styles.description}>
          O Príncipe Laurent é filho do Rei Alberto II da Bélgica, conhecido por seu envolvimento em iniciativas ambientais e causas de bem-estar animal.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://www.atomium.be/Content/Images/Atomium_Style.html.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Atomium</Text>
        <Text style={styles.description}>
          O Atomium, um ícone arquitetônico de Bruxelas, foi criado para a Exposição Universal de 1958 e representa um átomo de ferro ampliado 165 bilhões de vezes.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMqmEetmND-K7htripTJy6WL1dm5Q4QRurA&s' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Museu Real de Belas Artes</Text>
        <Text style={styles.description}>
          O Museu Real de Belas Artes em Bruxelas exibe uma coleção impressionante de arte flamenga, belga e europeia, e é um dos maiores museus do país.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS31-QPsXN-U_P5Ojijvj4wnv-Gp-Eex5Sg0w&s' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Chocolate Belga</Text>
        <Text style={styles.description}>
          O chocolate belga é famoso em todo o mundo por sua qualidade e sabor excepcionais, com uma longa tradição de fabricação artesanal.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://i.ytimg.com/vi/w1ntVWlDrlo/maxresdefault.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Waffles Belgas</Text>
        <Text style={styles.description}>
          Os waffles belgas são um prato típico da Bélgica, conhecidos por sua textura crocante por fora e macia por dentro, frequentemente servidos com frutas ou chantilly.
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
