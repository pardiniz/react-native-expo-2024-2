import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

export default function List() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Reino da Inglaterra</Text>
      
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://img.freepik.com/fotos-gratis/close-da-bandeira-realista-do-reino-unido-com-texturas-interessantes_181624-18977.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Bandeira da Inglaterra</Text>
        <Text style={styles.description}>
          A bandeira da Inglaterra, conhecida como Cruz de São Jorge, é um símbolo nacional que representa a Inglaterra.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://img.freepik.com/fotos-gratis/big-ben-e-westminster-bridge-ao-por-do-sol-londres-reino-unido_268835-1395.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726963200&semt=ais_hybrid' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Big Ben</Text>
        <Text style={styles.description}>
          O Big Ben é um dos marcos mais famosos de Londres e um ícone da Inglaterra, conhecido por seu relógio impressionante.
        </Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://img.freepik.com/fotos-gratis/famosa-tower-bridge-a-noite-londres-inglaterra_268835-1390.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Torre de Londres</Text>
        <Text style={styles.description}>
          A Torre de Londres é um histórico castelo localizado às margens do rio Tâmisa, famoso por sua história e pelas Joias da Coroa.
        </Text>
      </View>
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://wallpapers.com/images/hd/rainha-elizabeth-ii-t7c58c9rsg63u8nc.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Rainha Elizabeth</Text>
        <Text style={styles.description}>
        A Rainha Elizabeth II, nascida em 21 de abril de 1926, foi a monarca do Reino Unido e de outros reinos da Commonwealth de 1952 até sua morte em 2022. Ela foi a rainha mais longeva da história britânica, reinando por mais de 70 anos. Elizabeth II é conhecida por sua dedicação ao serviço público, seu papel em modernizar a monarquia e seu envolvimento em várias causas sociais. Durante seu reinado, ela enfrentou desafios políticos e familiares, mas sempre manteve uma imagem de estabilidade e continuidade. A rainha era uma figura simbólica de unidade e tradição para o povo britânico e além.
        </Text>
      </View>
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://wallpapers.com/images/hd/beautiful-princess-diana-of-wales-laqxdd0fswt9rgyi.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Lady Diana</Text>
        <Text style={styles.description}>
        Lady Diana Spencer, nascida em 1º de julho de 1961, foi a primeira esposa do Príncipe Charles e se tornou uma das figuras mais icônicas da família real britânica. Casou-se com Charles em 1981 e rapidamente se destacou por seu estilo, carisma e trabalho humanitário. Diana era apaixonada por causas sociais, incluindo saúde mental, AIDS e desminagem.

Após seu divórcio em 1996, continuou a ser uma figura pública muito amada, mas sua vida foi marcada por desafios pessoais e pela intensa pressão da mídia. Tragicamente, Diana morreu em um acidente de carro em Paris em 31 de agosto de 1997, o que gerou um grande luto mundial e deixou um legado duradouro de compaixão e envolvimento social. Ela é lembrada como "a Princesa do Povo" por sua conexão com as pessoas e seu trabalho em prol de diversas causas.
        </Text>
      </View>
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://www.rbsdirect.com.br/filestore/0/2/8/5/9/7_167e0899d1d420f/795820_8985d3b0d7170da.jpg?w=1024&h=576&a=c' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Principe Andrew</Text>
        <Text style={styles.description}>
        O Príncipe Andrew, Duque de York, nasceu em 19 de fevereiro de 1960, sendo o segundo filho da Rainha Elizabeth II e do Príncipe Philip. Serviu na Marinha Real Britânica e participou da Guerra das Malvinas como piloto de helicóptero. Em 1986, casou-se com Sarah Ferguson, com quem teve duas filhas, Beatrice e Eugenie. O casal se divorciou em 1996, mas manteve uma relação próxima.

Nos últimos anos, Andrew enfrentou controvérsias significativas, incluindo alegações de envolvimento em escândalos relacionados a Jeffrey Epstein, o que resultou em sua retirada de funções públicas e da família real. Apesar de ser um membro da família real, sua reputação foi profundamente afetada, e ele se tornou um tema de debate público e escrutínio.
        </Text>
      </View>
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://caras.com.br/media/uploads/2023-marco/principe-edward-novo-titulo_1_1.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Principe Edward</Text>
        <Text style={styles.description}>
        O Príncipe Edward, Conde de Wessex, nasceu em 10 de março de 1964, sendo o terceiro filho da Rainha Elizabeth II e do Príncipe Philip. Edward teve uma carreira inicial na televisão, trabalhando na produção e apresentação de programas, antes de se envolver mais ativamente em funções reais.

Em 1999, casou-se com Sophie Rhys-Jones, com quem teve dois filhos: Lady Louise Windsor e James, Visconde Severn. Edward é conhecido por seu trabalho em organizações de caridade e por seu apoio a várias causas, incluindo a arte, a educação e o esporte. Ele também é o presidente da The Duke of Edinburgh’s Award, um programa de desenvolvimento pessoal para jovens. Ao longo dos anos, ele tem buscado promover a imagem da monarquia de maneira mais contemporânea e acessível.
        </Text>
      </View>
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://wallpapers.com/images/hd/princesa-anne-1600-x-900-cb0ciqkp7qe6zwtf.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Princesa Anne</Text>
        <Text style={styles.description}>
        A Princesa Anne, filha da Rainha Elizabeth II e do Príncipe Philip, nasceu em 15 de agosto de 1950. Conhecida por sua postura prática e dedicada, Anne é uma figura ativa na vida pública britânica. Ela é a única filha da Rainha e é frequentemente reconhecida por seu trabalho em várias organizações de caridade, especialmente aquelas focadas em saúde, educação e esporte.

Anne é uma atleta talentosa, tendo competido nos Jogos Olímpicos de Montreal em 1976 como cavaleira. Casou-se duas vezes: primeiro com Mark Phillips, com quem teve dois filhos, Peter e Zara, e depois com Timothy Laurence. A Princesa Anne é conhecida por seu estilo direto e por seu compromisso com as causas que apoia, frequentemente realizando uma das maiores cargas de trabalho entre os membros da família real.
        </Text>
      </View>
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://uploads.metroimg.com/wp-content/uploads/2023/08/20121701/GettyImages-1259003184.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Principe William</Text>
        <Text style={styles.description}>
        Príncipe William, nascido em 21 de junho de 1982, é o filho mais velho do Rei Charles III e da falecida Princesa Diana. Ele é o primeiro na linha de sucessão ao trono britânico. William estudou em renomadas instituições, incluindo a Universidade de St. Andrews, onde conheceu sua esposa, Kate Middleton.

William é conhecido por seu trabalho em questões de saúde mental, conservação ambiental e apoio às forças armadas. Juntamente com Kate, ele promove iniciativas sociais e é um defensor ativo de causas relacionadas ao bem-estar da infância e à proteção do planeta. O casal tem três filhos: George, Charlotte e Louis, e juntos representam uma nova geração da família real britânica.
        </Text>
      </View>
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://i.pinimg.com/originals/22/a3/5d/22a35dc3fe42556125100a77f4a80763.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Principe Harry</Text>
        <Text style={styles.description}>
        Príncipe Harry, nascido em 15 de setembro de 1984, é o filho mais novo do Rei Charles III e da falecida Princesa Diana. Ele é conhecido por seu serviço militar, incluindo duas missões no Afeganistão, e por seu trabalho filantrópico em causas relacionadas à saúde mental, direitos dos veteranos e apoio à juventude.

Em 2018, casou-se com Meghan Markle, com quem teve dois filhos, Archie e Lilibet. Em 2020, Harry e Meghan se afastaram de seus deveres reais e se mudaram para os Estados Unidos, onde continuam a se envolver em projetos sociais e criaram a Archewell Foundation. Harry também é autor de um livro de memórias, onde compartilha experiências pessoais e reflexões sobre sua vida na família real.
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
