import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: "column",
    textAlign: "left",
    paddingVertical: 10,
    marginLeft: 12,
    paddingLeft: 20,
    backgroundColor: THEME.COLORS.SHAPE,
    width: 180,
    height: 280,
    borderRadius: 8,
  },
  button: {
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingVertical: 9.5,
    marginTop: 22,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
    backgroundColor: THEME.COLORS.PRIMARY,
    width: 140,
  },
  buttonDesc: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  },
});
