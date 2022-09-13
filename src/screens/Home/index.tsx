import React from "react";
import { Image, View } from "react-native";
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
      {/* <GameCard data={GAMES[0]} /> */}
    </View>
  );
}
