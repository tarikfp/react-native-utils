import * as React from "react";
import { BackHandler } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

/**
 * @type BackHandler event listener handler
 * @see BackHandlerStatic for more info regarding event handler
 * @returns boolean | null | undefined
 */

export type HardwareBackPressCallback = () => boolean | null | undefined;

/**
 * @function
 * @param @see HardwareBackPressCallback
 * @description registers event listeners for the system's back action, handles
 * adding removing listener on component mount/unmount
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
