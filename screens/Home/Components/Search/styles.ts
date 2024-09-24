import { StyleSheet } from "react-native";
import { theme } from "../../../../ui/theme/Theme";
import { getWidth } from "../../../../helpers/GetWidth";

export const searchStyles = StyleSheet.create({
  wrapper: {
    width: getWidth(32) ,
    borderBottomWidth: 2,
    borderColor: theme.colors.white,
    bottom: 0,
  },
  title: {
    height: 65,
    color: theme.colors.white,
  },
  iconsWrapper: {
    gap: 12,
    paddingBottom: 10,
  },
});
