import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./styles";
import { AdsInfo } from "../AdsInfo";

export interface adsProps {
  hourEnd: string;
  hourStart: string;
  id: string;
  name: string;
  weekDays: string[];
  useVoiceChannel: boolean;
  yearsPlaying: number;
}

interface Props {
  data: adsProps;
  onConnect:() => void,
}

export function AddCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <AdsInfo label="Name" value={data.name} />

      <AdsInfo label="Tempo de jogo" value={`${data.yearsPlaying} anos`} />

      <AdsInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart}h - ${data.hourEnd}h`}
      />

      <AdsInfo
        label="Chamada de audio?"
        value={data.useVoiceChannel ? `Sim` : `Não`}
      />

      <View>
        <TouchableOpacity onPress={onConnect}  style={styles.button}>
          <Entypo
            style={{ paddingRight: 8 }}
            name="game-controller"
            color={"#fff"}
            size={24}
          />
          <Text style={styles.buttonDesc}>Conectar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
