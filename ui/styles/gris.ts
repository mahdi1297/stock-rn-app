import { StyleSheet } from "react-native";

export const grid = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  alignCenter: {
    alignItems: "center",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  justifyStart: {
    justifyContent: "flex-start",
  },
  alignStart: {
    alignItems: "flex-start",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
});
