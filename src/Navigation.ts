import { NavigationState } from "@react-navigation/native";
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 *
 * @param state @see NavigationState
 * @returns current route name
 */
export const getCurrentRouteName = (
  state: NavigationState | Required<NavigationState["routes"][0]>["state"]
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
