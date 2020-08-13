import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Intro from './pages/Intro'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Bmi from './pages/Bmi'

const AppStack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none" 
        screenOptions={{
          cardStyle: {            
            backgroundColor: "#F0F0F5"
          }
        }}>
        <AppStack.Screen name="Intro" component={Intro} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Recipes" component={Recipes} />
        <AppStack.Screen name="Bmi" component={Bmi} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes