import { Platform, NativeModules } from "react-native";

/**
 * @description return device native locale
 * @returns stored language format of lang code. ex: "en"
 */

export const getDeviceNativeLanguage = (): string => {
  let lang;
  if (Platform.OS === "android") {
    lang = NativeModules.I18nManager.localeIdentifier;
  } else if (Platform.OS === "ios") {
    lang =
      NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0];
  } else {
    lang = "en";
  }
  return lang;
};
