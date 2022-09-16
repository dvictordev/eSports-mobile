import { View, Text } from "react-native";

import { styles } from "./styles";

interface AdsProps {
  label: string;
  value: string;
}

export function AdsInfo({ label, value }: AdsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}
