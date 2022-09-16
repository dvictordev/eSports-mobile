import React, { useEffect, useState } from "react";
import { GameCard, GameCardProps } from "../../components/GameCard";
import { Headling } from "../../components/Headling";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

import logoImg from "../../assets/logo-nlw-esports.png";
import { styles } from "./styles";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  function handleNavigationClick({ id, name, bannerUrl }: GameCardProps) {
    navigation.navigate("game", { id, name, bannerUrl });
  }

  useEffect(() => {
    fetch("http://172.21.248.53:3333/games")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Headling
          title={"Encontre o seu duo!"}
          subtitle={"Selecione o game que deseja jogar..."}
        />

        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <GameCard
                onPress={() => handleNavigationClick(item)}
                data={item}
                activeOpacity={0.6}
              />
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
