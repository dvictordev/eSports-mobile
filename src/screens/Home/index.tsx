import React from "react";
import { Image, View, FlatList } from "react-native";
import logoImg from "../../assets/logo-nlw-esports.png";
import { GameCard } from "../../components/GameCard";
import { Headling } from "../../components/Headling";
import { GAMES } from "../../utils/games";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Headling
        title={"Encontre o seu duo!"}
        subtitle={"Selecione o game que deseja jogar..."}
      />

      <FlatList 
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem ={({item})=> {
          return(
            <GameCard 
          data={item} activeOpacity={0.6}
          />
          )
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
