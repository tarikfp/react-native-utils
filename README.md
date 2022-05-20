# @tarikfp/react-native-utils  &middot; ![](https://img.shields.io/npm/dw/@tarikfp/react-native-utils) ![](https://img.shields.io/bundlephobia/minzip/@tarikfp/react-native-utils) ![](https://img.shields.io/npm/v/@tarikfp/react-native-utils)


Utility functions for react native projects. Written in typescript.
Nothing is invented in this project. The functions are just derived from existing features over react-native

## Installation

Install my-project with npm

```bash
  npm install @tarikfp/react-native-utils
```

or

```bash
  yarn add @tarikfp/react-native-utils

```

In order to use this package, make sure you have installed following packages in advance.

- react-native-vector-icons
- @react-navigation/native
- @react-navigation/stack

## Usage/Examples

## useGoBackHandler

#### useGoBackHandler is hook which will be executed when ios swipe back action or android back button is executed

```javascript
import * as React from 'react'
import { useGoBackHandler } from '@tarikfp/react-native-utils'

function App() {
  ...

  /* A event handler function returns boolean | null | undefined */

  const _backAction = React.useCallback(() => {
    navigation.goBack();
    return true;
  }, [navigation]);

  useGoBackHandler(_backAction)
}
```

## useKeyboardListener

#### useKeyboardListener is hook which listens keyboard visibility

```javascript
import * as React from 'react'
import { useKeyboardListener } from '@tarikfp/react-native-utils'

function App() {
  ...

  const isKeyboardShown = useKeyboardListener();

   if (isKeyboardShown) {
     ...
  }
}
```

## getCurrentRouteName

#### getCurrentRouteName function that returns active route name

```javascript
import * as React from 'react'
import { getCurrentRouteName } from '@tarikfp/react-native-utils'

function TabBar() {
  ...

  const currentRouteName = getCurrentRouteName();

  if (currentRouteName === "user-profile") {
    return null;
  }

  return <MyCustomTabBarComponent />;

}
```

## getDeviceNativeLanguage

#### A function returns device native language (ex: "en", "fr"...)

```javascript
import * as React from 'react'
import { getDeviceNativeLanguage } from '@tarikfp/react-native-utils'

function App() {
  ...

  const deviceNativeLanguage = getDeviceNativeLanguage()

  return <MyComponent />
}
```

## Layout utilities

#### A function takes percentage (string or number) as parameter and returns calculated percentage size as number

```javascript
import * as React from 'react'
import {getWindowHeight, getWindowHeight} from '@tarikfp/react-native-utils'

function App() {
  ...

  const myStyle = {
    width: getWindowWidth(100),
    height: getWindowHeight("95"),
  };

  return <MyComponent style={myStyle} />
}
```

## Native alert

#### Displays an native alert dialog with the specified params

```javascript
import * as React from 'react'
import { showNativeAlert } from '@tarikfp/react-native-utils'

function App() {
  ...

  /* Sample scenario, where the user provides wrong credentials, then sees alert */

  const { data } = myApi.login('username','12345')

  if(data.invalidCredentials){
      showNativeAlert({
          title: 'Invalid',
          content: 'Invalid credentials',
          buttonOneText: 'Try Again',
          buttonTwoText: 'Ok',
          onPressButtonOne: () => handleButtonOnePress(),
          onPressButtonTwo: () => handleButtonTwoPress(),
      });
  }
}
```

## Icon component

#### Wrapper over a react native vector package which enables dynamic usage of react-native-vector icons.

```javascript
import * as React from 'react'
import { Icon } from '@tarikfp/react-native-utils'

function App() {
  ...
  const togglePopupDialog = () => { ... }
  const iconStyle = { ... }

  return (
    <Icon
      onPress={togglePopupDialog}
      style={iconStyle}
      color={"#424232"}
      name="dots-three-horizontal"
      type="Entypo"
    />
  );
}
```

## Authors

- [@tarikpnr](https://www.github.com/tarikpnr)

## Feedback

If you have any feedback, please contact me through tarikdotcom@gmail.com
