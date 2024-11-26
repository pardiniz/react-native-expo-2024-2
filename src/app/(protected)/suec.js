import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

export default function List() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Reino da Suécia</Text>
      
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_Sweden.svg/1920px-Flag_of_Sweden.svg.png' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Bandeira da Suécia</Text>
        <Text style={styles.description}>
          A bandeira da Suécia, com a cruz nórdica em azul e amarelo, é um símbolo da história e identidade do país, refletindo sua herança cultural e suas raízes cristãs.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Stockholm_in_September_2017.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Estocolmo</Text>
        <Text style={styles.description}>
          Estocolmo, a capital da Suécia, é uma cidade impressionante, conhecida pela sua arquitetura moderna e histórica, além de estar espalhada por 14 ilhas no arquipélago de Estocolmo.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Sweden_Royal_Palace_2016.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Palácio Real de Estocolmo</Text>
        <Text style={styles.description}>
          O Palácio Real de Estocolmo, residência oficial da monarquia sueca, é um dos maiores palácios do mundo e um importante centro de cultura e história na Suécia.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/King_Carl_XVI_Gustaf_in_2013.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Rei Carl XVI Gustaf</Text>
        <Text style={styles.description}>
          O Rei Carl XVI Gustaf, monarca da Suécia desde 1973, desempenha um papel simbólico na política do país, representando a continuidade e a tradição da monarquia sueca.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Princess_Victoria_of_Sweden_2015.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Princesa Victoria</Text>
        <Text style={styles.description}>
          A Princesa Victoria da Suécia é a herdeira do trono e uma figura popular no país, conhecida por seu trabalho em causas sociais e sua dedicação à família e ao serviço público.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Princess_Madeleine_of_Sweden_2013.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Princesa Madeleine</Text>
        <Text style={styles.description}>
          A Princesa Madeleine da Suécia, irmã da Princesa Victoria, é uma defensora de causas sociais e tem trabalhado ativamente em diversas iniciativas de caridade internacionais.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Prince_Carl_Philip_of_Sweden_2014.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Príncipe Carl Philip</Text>
        <Text style={styles.description}>
          O Príncipe Carl Philip, filho do Rei Carl XVI Gustaf, é conhecido por seu trabalho em design gráfico e é também um defensor de diversas organizações de caridade.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Falun_Mine_-_UNESCO_World_Heritage_Site_-_Sweden.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Minas de Falun</Text>
        <Text style={styles.description}>
          As Minas de Falun, um Patrimônio Mundial da UNESCO, têm uma longa história e foram uma das maiores minas de cobre do mundo, desempenhando um papel crucial na economia e na cultura suecas.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Vasa_Museum_Stockholm.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Museu Vasa</Text>
        <Text style={styles.description}>
          O Museu Vasa, em Estocolmo, é dedicado ao famoso navio Vasa, que afundou em 1628 em sua viagem inaugural e foi recuperado quase intacto mais de 300 anos depois.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Sweden_Swedish_Fika.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Fika</Text>
        <Text style={styles.description}>
          O "fika" é uma tradição sueca de fazer uma pausa para o café, frequentemente acompanhado de bolos ou pães, sendo um momento social importante no cotidiano dos suecos.
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
