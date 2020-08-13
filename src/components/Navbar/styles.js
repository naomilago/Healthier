import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../assets/colorPallete'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  navBackground: {
    width: Dimensions.get('window').width,
    marginLeft: -30,
    height: 80,
    backgroundColor: "#F0F6F7",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center"
  }
})