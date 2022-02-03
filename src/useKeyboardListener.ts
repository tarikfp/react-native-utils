import * as React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Keyboard } from "react-native";

type Callback = () => void;

/**
 *
 * @param onKeyboardWillShow a callback function @see Callback type fires when keyboard is about to show
 * @param onKeyboardWillHide a callback function @see Callback type fires when keyboard is about to hide
 * @returns void
 */

export const useKeyboardListener = (
  onKeyboardWillShow: Callback,
  onKeyboardWillHide: Callback
): void => {
  useFocusEffect(
    React.useCallback(() => {
      Keyboard.addListener("keyboardWillShow", () => onKeyboardWillShow());
      Keyboard.addListener("keyboardWillHide", () => onKeyboardWillHide());
    }, [])
  );
};
