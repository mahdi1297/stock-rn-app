import { StyleSheet } from "react-native";
import { theme } from "../../ui/theme/Theme";

export const homeStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    paddingTop: theme.distances.space.xl,
  },
  exploreWrapper:{
    height: 268
  }
});
