import { useState, useEffect } from "react";
import { Image, TouchableOpacity, View, FlatList } from "react-native";
import { Background } from "../../components/Background";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { GameParams } from "../../@types/@navigation";
import { useNavigation } from "@react-navigation/native";

import logoImg from "../../assets/logo-nlw-esports.png";
import { styles } from "./styles";
import { THEME } from "../../theme";
import { Headling } from "../../components/Headling";
import { AddCard, adsProps } from "../../components/AddCard";

export function Game() {
  const [ad, setAd] = useState<adsProps[]>();
  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  function handleBackNavigation() {
    navigation.goBack();
  }

  useEffect(() => {
    fetch(`http://172.21.248.53:3333/games/${game.id}/ads`)
      .then((res) => res.json())
      .then((data) => {
        setAd(data);
        console.log(data);
      });
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBackNavigation}>
            <Entypo
              name="chevron-thin-left"
              size={20}
              color={THEME.COLORS.CAPTION_300}
            />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right} />
        </View>
        <Image source={{ uri: game.bannerUrl }} style={styles.game} />
        <Headling
          style={styles.description}
          title={game.name}
          subtitle={"Conecte-se e comece a jogar!"}
        />
        <FlatList
          horizontal
          data={ad}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <AddCard data={item} />;
          }}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}