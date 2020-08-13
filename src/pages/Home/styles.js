import { StyleSheet } from 'react-native';
import { Colors } from '../../assets/colorPallete'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 30
  },
  homeIntro: {
    paddingTop: 60,
  },
  title: {
    fontFamily: 'Solway_700Bold',
    fontSize: 24,
    color: Colors.title,
    lineHeight: 32
  },
  description: {
    color: Colors.text,
    lineHeight: 32,
    fontSize: 16,
    fontFamily: 'Solway_400Regular'
  },
  card: {
    width: 352,
    height: 178,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: 20
  },
  card2: {
    width: 352,
    height: 210,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: 20
  },
  card3: {
    width: 352,
    height: 230,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: 20
  },
  milkIcon: {
    maxHeight: 50,
    maxWidth: 41.37,
    position: "absolute",
    marginLeft: 290,
    marginTop: 15
  },
  broccoliIcon: {
    maxHeight: 50,
    maxWidth: 49.88,
    position: "absolute",
    marginLeft: 290,
    marginTop: 15
  },
  juiceIcon: {
    maxHeight: 50,
    maxWidth: 36.94,
    position: "absolute",
    marginLeft: 290,
    marginTop: 15
  },
  cardTitle: {
    fontFamily: 'Solway_500Medium',
    fontSize: 22,
    color: Colors.title,
    marginTop: 30,
    marginLeft: 20,
    lineHeight: 32
  },
  cardTitle2: {
    fontFamily: 'Solway_500Medium',
    fontSize: 22,
    color: Colors.title,
    marginTop: 30,
    marginLeft: 20,
    lineHeight: 32,
    width: 230
  },
  cardDescription:  {
    fontFamily: 'Solway_400Regular',
    lineHeight: 32,
    fontSize: 18,
    paddingHorizontal: 20,
    color: Colors.text,
    marginTop: 20,
    textAlign: "justify"
  },
  safeArea: {
    marginBottom: 220
  }
})