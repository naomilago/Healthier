import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar, View, Text } from 'react-native';
import { Solway_300Light, Solway_400Regular, Solway_500Medium, Solway_700Bold, Solway_800ExtraBold, useFonts } from '@expo-google-fonts/solway';
import Routes from './src/routes'

const App = () => {
  const [fontsLoaded] = useFonts({
    Solway_400Regular,
    Solway_500Medium,
    Solway_700Bold,
    Solway_300Light,
    Solway_800ExtraBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  // A tela tem sei la.. 300px 600px. Ai vc coloca o App. Mas. O app. ele nao tem altura definida entao ele ta ocupando 0px. se vc coloca flex 1, ele ocupa  todo o espaço do contaienr anterior [ tela ] entao aparece
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
    </View>
  )
};

export default App