/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createNavigationContainerRef,
  NavigationState,
} from "@react-navigation/native";
import { useEffect, useRef } from "react";
import { BackHandler } from "react-native";

export const getCurrentRouteName = (
  state: NavigationState | Required<NavigationState["routes"][0]>["state"],
): string | undefined => {
  if (state?.index === undefined || state?.index < 0) {
    return undefined;
  }
  const nestedState = state?.routes[state?.index]?.state;
  if (nestedState !== undefined) {
    return getCurrentRouteName(nestedState);
  }
  if ((state?.routes[state.index]?.params as any)?.screen) {
    return (state.routes[state.index].params as any)?.screen;
  }

  return state?.routes[state.index]?.name;
};

export const navigationRef = createNavigationContainerRef();

/**
 * Hook that handles Android back button presses and forwards those on to
 * the navigation or allows exiting the app.
 */
export function useBackButtonHandler(canExit: (routeName: string) => boolean) {
  const canExitRef = useRef(canExit);

  useEffect(() => {
    canExitRef.current = canExit;
  }, [canExit]);

  useEffect(() => {
    // We'll fire this when the back button is pressed on Android.
    const onBackPress = () => {
      if (!navigationRef.isReady()) {
        return false;
      }

      // grab the current route
      const routeName = getCurrentRouteName(navigationRef.getRootState());

      if (routeName) {
        // are we allowed to exit?
        if (canExitRef.current(routeName)) {
          // exit and let the system know we've handled the event
          BackHandler.exitApp();
          return true;
        }

        // we can't exit, so let's turn this into a back action
        if (navigationRef.canGoBack()) {
          navigationRef.goBack();
          return true;
        }
      }

      return false;
    };

    // Subscribe when we come to life
    BackHandler.addEventListener("hardwareBackPress", onBackPress);

    // Unsubscribe when we're done
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", onBackPress);
  }, []);
}
