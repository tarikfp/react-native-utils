
# @tarikfp/react-native-utils

Utility functions for react native projects. Written in typescript.



## Authors

- [@tarikpnr](https://www.github.com/tarikpnr)


## Feedback

If you have any feedback, please contact me through tarikdotcom@gmail.com


## Usage/Examples

## useHardwareBackPress (Android only)
#### Handling native back press on android devices
```javascript
import * as React from 'react'
import {useHardwareBackPress} from '@tarikfp/react-native-utils'

function App() {
  ...

  /* A event handler function returns boolean | null | undefined */

  const _backAction = React.useCallback(() => {
    navigation.goBack();
    return true;
  }, [navigation]);

  /* Use the function above as a param of the hook to get desired result */

  useHardwareBackPress(_backAction)

  return <MyComponent />
}
```


## getDeviceNativeLanguage
#### A function returns device native language (ex: "en", "fr"...)
```javascript
import * as React from 'react'
import {getDeviceNativeLanguage} from '@tarikfp/react-native-utils'

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
import {showNativeAlert} from '@tarikfp/react-native-utils'

function App() {
  ...

  /* Sample scenario, where the user provides wrong credentials, then sees alert */

  const {data} = myApi.login('username','12345') 
  
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




