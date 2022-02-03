import { Platform, NativeModules } from "react-native";

/**
 * @function
 * @description return device native locale
 */

export const getDeviceNativeLanguage = (): string => {
  let lang;
  if (Platform.OS === "android") {
    lang = NativeModules.I18nManager.localeIdentifier;
  } else if (Platform.OS === "ios") {
    // AppleLanguages: ["tr-US", "en-US", "es-US"]
    lang =
      NativeModules.SettingsManager?.settings.AppleLocale ??
      NativeModules.SettingsManager?.settings.AppleLanguages[0].split("-")[0] ??
      "en";
  } else {
    lang = "en";
  }
  return lang;
};
