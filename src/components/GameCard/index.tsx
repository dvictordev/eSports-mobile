import React from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
  Text,
} from "react-native";

import { styles } from "./styles";

export interface GameCardProps {
  id: String;
  name: String;
  ads: String;
  cover: ImageSourcePropType;
}

interface props extends GameCardProps {
  data: GameCardProps;
}

export function GameCard({ data, ...rest }: props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground source={data.cover} style={styles.cover} />

      {/* <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.ads}>{data.ads}</Text> */}
    </TouchableOpacity>
  );
}
