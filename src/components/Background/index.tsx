import React from "react";
import { ImageBackground } from "react-native";
import backgroundImg from "../../assets/background-galaxy.png";

import { styles } from "./styles";

interface backgroundProps {
  children: React.ReactNode;
}

export function Background({ children }: backgroundProps) {
  return (
    <ImageBackground
      source={backgroundImg}
      defaultSource={backgroundImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}
