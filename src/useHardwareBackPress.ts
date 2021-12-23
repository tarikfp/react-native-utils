import * as React from "react";
import { BackHandler } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { HardwareBackPressCallback } from "./types/HardwareBackPressCallback";

/**
 * @function
 * @param @see INativeAlertProps
 * @description for showing native information dialog
 */
export const useHardwareBackPress = (
  callback: HardwareBackPressCallback
): void => {
  const backAction = React.useCallback(() => {
    return callback();
  }, [callback]);

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", backAction);
      return () => {
        BackHandler.removeEventListener("hardwareBackPress", backAction);
      };
    }, [backAction])
  );
};
