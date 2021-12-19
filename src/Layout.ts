import { Dimensions, PixelRatio, Platform } from "react-native";
import { Percentage } from "./types/Percentage";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const scale = SCREEN_WIDTH / 320;

/**
 *
 * @param percentage string or number
 * @function
 * @description takes percentage (string or number) as parameter and returns calculated percentage size as number
 * @returns window width
 */

export const getWindowWidth = (percentage: Percentage): number => {
  if (typeof percentage === "number") {
    return SCREEN_WIDTH * (percentage / 100);
  } else {
    return SCREEN_WIDTH * (Number(percentage.replace("%", "")) / 100);
  }
};

/**
 *
 * @param percentage string or number
 * @function
 * @description takes percentage (string or number) as parameter and returns calculated percentage size as number
 * @returns window height
 */

export const getWindowHeight = (percentage: Percentage): number => {
  if (typeof percentage === "number") {
    return SCREEN_HEIGHT * (percentage / 100);
  } else {
    return SCREEN_HEIGHT * (Number(percentage.replace("%", "")) / 100);
  }
};

/**
 *
 * @param size
 * @function
 * @description normalize size
 * @returns normalized size
 */

export const normalize = (size: number): number => {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
