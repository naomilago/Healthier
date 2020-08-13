import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import homeIcon from '../../assets/homeIcon.png'
import recipeIcon from '../../assets/recipeIcon.png'
import bmiIcon from '../../assets/bmiIcon.png'

const Navbar = () => {
  const navigation = useNavigation()

  function handleNavigateToHome() {
    navigation.navigate('Home')
  }

  function handleNavigateToRecipes() {
    navigation.navigate('Recipes')
  }

  function handleNavigateToBmi() {
    navigation.navigate('Bmi')
  }

  return (
    <SafeAreaView>
      <View style={styles.navBackground}>
        <TouchableOpacity onPress={handleNavigateToHome}>
          <Image source={homeIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigateToRecipes}>
          <Image source={recipeIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigateToBmi}>
          <Image source={bmiIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Navbar