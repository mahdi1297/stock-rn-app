import { StyleSheet } from "react-native";
import { theme } from "../../../../ui/theme/Theme";
import { windowSize } from "../../../../shared/Utils/WindowSize";

const { WINDOW_WIDTH } = windowSize();

export const trendsStyle = StyleSheet.create({
  wrapper: {
    margin: "auto",
    marginTop: 32,
    width: WINDOW_WIDTH - 12,
    borderRadius: 32,
    backgroundColor: theme.colors.white,
    paddingTop: 32,
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  title: {
    height: 45,
    fontSize: 24,
    fontFamily: "iran-yekan-extra-bold",
    color: theme.colors.primary,
  },
  renderItem: {
    marginBottom: 16,
    width: WINDOW_WIDTH / 2 - 40,
    borderWidth: 1,
    height: 130,
    borderColor: theme.colors.lightGray,
    borderRadius: 24,
    padding: 12,
  },
  stockNameText: {
    fontSize: theme.distances.space.xmd,
    fontFamily: "iran-yekan-bold",
    color: "#313434",
    opacity: 0.7,
  },
  economicalDetailWrapper: {
    marginTop: theme.distances.space.xmd,
    width: "100%",
  },
  priceText: {
    fontSize: theme.fonstSizes.md,
    fontFamily: "iran-yekan-extra-bold",
    fontWeight: 500,
  },
  percentageWrapper: {
    marginTop: theme.distances.space.xsm,
  },
  bottomText: {
    fontSize: theme.fonstSizes.sm,
    marginTop: theme.distances.space.xsm,
    fontFamily: "iran-yekan-regular",
    color: "#313434",
    opacity: 0.7,
    width: "100%",
    textAlign: "left",
  },
});
