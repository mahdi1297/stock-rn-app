import { StyleSheet } from "react-native";
import { theme } from "../../../../ui/theme/Theme";
import { windowSize } from "../../../../shared/utils/WindowSize";

const { WINDOW_WIDTH } = windowSize();
const WRAPPER_WIDTH = WINDOW_WIDTH - 32;

export const searchStyles = StyleSheet.create({
  wrapper: {
    width: WRAPPER_WIDTH,
    borderBottomWidth: 2,
    borderColor: theme.colors.white,
    position: "absolute",
    bottom: 0,
  },
  title: {
    height: 65,
    fontSize: 24,
    fontFamily: "iran-yekan-extra-bold",
    color: theme.colors.white,
  },
  iconsWrapper: {
    gap: 12,
    paddingBottom: 10,
  },
});
