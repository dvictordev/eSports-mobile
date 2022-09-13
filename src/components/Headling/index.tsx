import { View, Text, ViewProps } from "react-native";
import { GameCardProps } from "../GameCard";

import { styles } from "./styles";

interface Props extends ViewProps {
  title: String;
  subtitle: String;
}

export function Headling({ title, subtitle, ...rest }: Props) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
