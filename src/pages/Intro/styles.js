import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../assets/colorPallete'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  illustration: {
    maxWidth: 300,
    maxHeight: 300,
    marginTop: 100,
    alignSelf: 'center'
  },
  introBackground: {
    height: 425
  },
  introContent: {
    paddingHorizontal: 40
  },
  introTitle: {
    marginTop: 130,
    fontFamily: 'Solway_700Bold',
    fontSize: 36,
    width: 200,
    color: Colors.title
  },
  introText: {
    fontFamily: 'Solway_300Light',
    fontSize: 16,
    lineHeight: 32,
    marginTop: 20
  },
  scrollView: {
    flex: 1,
    flexDirection: 'row'
  },
  opacitySize: {
    width: 160,
    height: 61.18,
    borderRadius: 25,
    marginLeft: 220,
    marginRight: 40,
    borderRadius: 25,
    marginTop: Dimensions.get('window').height - 880
  },  
  introButton: {
    width: 160,
    height: 61.18,
  },
  introButtonText: {
    fontFamily: "Solway_800ExtraBold",
    color: '#FFFFFF',
    fontSize: 20,
    alignSelf: 'center',
    lineHeight: 32,
    marginTop: 14
  },
  introNav: {
    marginLeft: 40,
    marginTop: Dimensions.get('window').height - 770
  }
})
