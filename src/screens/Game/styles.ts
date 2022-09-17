import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    marginTop: 28,
    paddingHorizontal: 32,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 72,
    height: 40,
  },
  game: {
    width: 311,
    height: 160,
    borderRadius: 8,
    marginVertical: 32,
  },
  right: {
    width: 20,
    height: 20,
  },
  description: {
    paddingLeft: 32,
    alignSelf: "flex-start",
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
  },
  noContent: {
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT,
    alignSelf: "center",
    marginTop: -100,
  },
});
