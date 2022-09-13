import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { Background } from "./src/components/Background";
import logo from "./assets/logo-nlw-esports.png";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { Loading } from "./src/components/Loading";
import { Home } from "./src/screens/Home";

export default function App() {
  const [fonstLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Background>
      <StatusBar style="light" translucent />
      {fonstLoaded ? <Home /> : <Loading />}
    </Background>
  );
}
