import { BackHandlerStatic } from "react-native";

/**
 * @type BackHandler event listener handler
 * @see BackHandlerStatic for more info regarding event handler
 * @returns boolean | null | undefined
 */

export type HardwareBackPressCallback = () => boolean | null | undefined;
