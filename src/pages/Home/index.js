import React from 'react'
import { View, Text, ImageBackground, SafeAreaView, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles';
import Navbar from '../../components/Navbar'

import homeBg from '../../assets/home-bg.png'
import milkIcon from '../../assets/milkIcon.png'
import broccoliIcon from '../../assets/broccoliIcon.png'
import juiceIcon from '../../assets/juiceIcon.png'

const Home = () => {
  const navigation = useNavigation()

  return (
    <ImageBackground source={homeBg} style={styles.container} resizeMode="cover">
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.homeIntro}>
          <Text style={styles.title}>Find the funniest nutrition facts</Text>
          <Text style={styles.description}>Here you can find some interesting fun facts about nutrition that you may didn’t know before.</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.card}>
            <View style={styles.cardWrap}>
              <Image source={milkIcon} style={styles.milkIcon} />
              <Text style={styles.cardTitle}>Milk is 87% water</Text>
            </View>
            <Text style={styles.cardDescription}>The nutrients, like protein, carbohydrate, vitamins and minerals are all found in the other 13%.</Text>
          </View>

          <View style={styles.card2}>
            <View style={styles.cardWrap}>
              <Image source={broccoliIcon} style={styles.broccoliIcon} />
              <Text style={styles.cardTitle2}>Broccoli is a source of calcium</Text>
            </View>
            <Text style={styles.cardDescription}>You can get 50 mg of calcium from a 3/4 cup (175 mL) portion. Adults aged 19–50 need 1000 mg of calcium every day.</Text>
          </View>

          <View style={styles.card3}>
            <View style={styles.cardWrap}>
              <Image source={juiceIcon} style={styles.juiceIcon} />
              <Text style={styles.cardTitle2}>Fruit juice is the same as soda</Text>
            </View>
            <Text style={styles.cardDescription}>Despite coming from healthy sources such as fruits, the added sugar make these beverages just as unhealthy as any sugary drink. </Text>
          </View>

          <View style={styles.card}>
            <View style={styles.cardWrap}>
              <Image source={milkIcon} style={styles.milkIcon} />
              <Text style={styles.cardTitle}>Milk is 87% water</Text>
            </View>
            <Text style={styles.cardDescription}>The nutrients, like protein, carbohydrate, vitamins and minerals are all found in the other 13%.</Text>
          </View>

          <View style={styles.card2}>
            <View style={styles.cardWrap}>
              <Image source={broccoliIcon} style={styles.broccoliIcon} />
              <Text style={styles.cardTitle2}>Broccoli is a source of calcium</Text>
            </View>
            <Text style={styles.cardDescription}>You can get 50 mg of calcium from a 3/4 cup (175 mL) portion. Adults aged 19–50 need 1000 mg of calcium every day.</Text>
          </View>

          <View style={styles.card3}>
            <View style={styles.cardWrap}>
              <Image source={juiceIcon} style={styles.juiceIcon} />
              <Text style={styles.cardTitle2}>Fruit juice is the same as soda</Text>
            </View>
            <Text style={styles.cardDescription}>Despite coming from healthy sources such as fruits, the added sugar make these beverages just as unhealthy as any sugary drink. </Text>
          </View>

          <View style={styles.card}>
            <View style={styles.cardWrap}>
              <Image source={milkIcon} style={styles.milkIcon} />
              <Text style={styles.cardTitle}>Milk is 87% water</Text>
            </View>
            <Text style={styles.cardDescription}>The nutrients, like protein, carbohydrate, vitamins and minerals are all found in the other 13%.</Text>
          </View>

          <View style={styles.card2}>
            <View style={styles.cardWrap}>
              <Image source={broccoliIcon} style={styles.broccoliIcon} />
              <Text style={styles.cardTitle2}>Broccoli is a source of calcium</Text>
            </View>
            <Text style={styles.cardDescription}>You can get 50 mg of calcium from a 3/4 cup (175 mL) portion. Adults aged 19–50 need 1000 mg of calcium every day.</Text>
          </View>

          <View style={styles.card3}>
            <View style={styles.cardWrap}>
              <Image source={juiceIcon} style={styles.juiceIcon} />
              <Text style={styles.cardTitle2}>Fruit juice is the same as soda</Text>
            </View>
            <Text style={styles.cardDescription}>Despite coming from healthy sources such as fruits, the added sugar make these beverages just as unhealthy as any sugary drink. </Text>
          </View>          
        </ScrollView>
        <Navbar />
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Home