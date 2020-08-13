import React from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles';
import introBg from '../../assets/intro-bg.png';
import introContentBg from '../../assets/introContent-bg.png'
import introButtonBg from '../../assets/intro-buttonBg.png'
import introNav from '../../assets/intro-nav.png'
import illustration from '../../assets/illustration.png'

const Intro = () => {
  const navigation = useNavigation()

  function handleNavigateToHome() {
    navigation.navigate('Home')
  }

  return (
    <ImageBackground source={introBg} style={styles.container} resizeMode="cover">
      <SafeAreaView>
        <Image style={styles.illustration} source={illustration} />
        <ImageBackground 
          source={introContentBg} 
          style={styles.introBackground} 
          resizeMode={'cover'}
        >
          <View style={styles.introContent}>
            <Text style={styles.introTitle}>
              Welcome to Healthier!
            </Text>
            <Text style={styles.introText}>
              Healthier helps you to find better ways to have healthy meals, good recipes and tips for getting a healthier life!
            </Text>
          </View>
          <Image style={styles.introNav} source={introNav} />
          <TouchableOpacity onPress={handleNavigateToHome} style={styles.opacitySize}>
            <ImageBackground source={introButtonBg} style={styles.introButton} resizeMode={'cover'}>
            <Text style={styles.introButtonText}>Get Started</Text>
            </ImageBackground>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Intro