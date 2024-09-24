import { Dimensions } from "react-native";

export const windowSize = () => {
  const dimension = Dimensions.get("window");

  const WINDOW_WIDTH = dimension.width;
  const WINDOW_HEIGHT = dimension.height;

  return { WINDOW_WIDTH, WINDOW_HEIGHT };
};
