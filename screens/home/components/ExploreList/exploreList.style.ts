import { StyleSheet } from "react-native";
import { theme } from "../../../../ui/theme/Theme";

export const exploreListStyle = StyleSheet.create({
  list: {
    marginTop: theme.distances.space.xl,
  },
  renderItemWrapper: {
    width: 170,
    height: 236,
    marginRight: theme.distances.space.sm,
    borderRadius: theme.distances.space.xl,
    paddingVertical: theme.distances.space.xl,
    paddingHorizontal: theme.distances.space.lg,
  },
  stockNameText: {
    fontSize: theme.distances.space.xmd,
    fontFamily: "iran-yekan-regular",
    color: "#313434",
    opacity: 0.7,
  },
  economicalDetailWrapper: {
    marginTop: theme.distances.space.xl,
    width: "100%",
  },
  priceText: {
    fontSize: theme.fonstSizes.lg,
    fontFamily: "iran-yekan-extra-bold",
    fontWeight: 900,
  },
  percentageWrapper: {
    marginTop: theme.distances.space.xsm,
  },
  bottomText: {
    fontSize: theme.fonstSizes.sm,
    marginTop: theme.distances.space.lg,
    fontFamily: "iran-yekan-regular",
    color: "#313434",
    opacity: 0.7,
  },
});
