import { Alert, AlertButton } from "react-native";

/**
 * @description props for displaying native alert function
 */

export interface INativeAlertProps {
  readonly title?: string;
  readonly content: string;
  readonly buttonOneText: string;
  readonly buttonTwoText?: string;
  readonly onPressButtonOne?: () => void;
  readonly onPressButtonTwo?: () => void;
}

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
