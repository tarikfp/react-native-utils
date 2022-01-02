import { Alert, AlertButton } from "react-native";
import { Colors } from "react-natives/Libraries/NewAppScreen";
import { INativeAlertProps } from "./types/NativeAlertProps";

/**
 * @function
 * @param @see INativeAlertProps
 * @description for showing native information dialog
 */

export const showNativeAlert = (param: INativeAlertProps): void => {
  const {
    buttonOneText,
    content,
    buttonTwoText,
    onPressButtonOne,
    onPressButtonTwo,
    title,
  } = param;
  const buttons: AlertButton[] = [
    {
      text: buttonOneText,
      style: buttonTwoText ? "destructive" : "default",
      onPress: () => onPressButtonOne?.(),
    },
  ];
  if (buttonTwoText) {
    buttons.push({
      text: buttonTwoText,
      style: "default",
      onPress: () => onPressButtonTwo?.(),
    });
  }
  return Alert.alert(title == undefined ? "" : title, content, buttons, {
    cancelable: true,
  });
};
