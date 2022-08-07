/* eslint-disable global-require */
import * as React from "react";
import type {
  ColorValue,
  GestureResponderEvent,
  TextProps,
  TextStyle,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Zocial from "react-native-vector-icons/Zocial";

export interface RNVectorIconsIconProps extends TextProps {
  /**
   * Size of the icon, can also be passed as fontSize in the style object.
   *
   * @default 12
   */
  size?: number | undefined;

  /**
   * Name of the icon to show
   *
   * See Icon Explorer app
   * {@link https://github.com/oblador/react-native-vector-icons/tree/master/Examples/IconExplorer}
   */
  name: string;

  /**
   * Color of the icon
   *
   */
  color?: ColorValue | number | undefined;
}

export interface IconPropsBase extends RNVectorIconsIconProps {
  type: IconType;
  style?: TextStyle;
  onPress?: (event: GestureResponderEvent) => void;
}

interface AntDesignProps extends IconPropsBase {
  type: "AntDesign";
}
interface MaterialIconsProps extends IconPropsBase {
  type: "MaterialIcons";
}
interface EvilIconsProps extends IconPropsBase {
  type: "EvilIcons";
}
interface EntypoProps extends IconPropsBase {
  type: "Entypo";
}
interface FontAwesomeProps extends IconPropsBase {
  type: "FontAwesome";
}
interface FoundationProps extends IconPropsBase {
  type: "Foundation";
}
interface IoniconsProps extends IconPropsBase {
  type: "Ionicons";
}
interface MaterialCommunityIconsProps extends IconPropsBase {
  type: "MaterialCommunityIcons";
}
interface ZocialProps extends IconPropsBase {
  type: "Zocial";
}
interface OcticonsProps extends IconPropsBase {
  type: "Octicons";
}
interface SimpleLineIconsProps extends IconPropsBase {
  type: "SimpleLineIcons";
}
interface FontistoProps extends IconPropsBase {
  type: "Fontisto";
}
interface FeatherProps extends IconPropsBase {
  type: "Feather";
}

interface FontAwesome5Props extends IconPropsBase {
  type: "FontAwesome5";
  brand?: boolean;
  solid?: boolean;
}

export type IconProps =
  | AntDesignProps
  | MaterialIconsProps
  | EvilIconsProps
  | EntypoProps
  | FontAwesomeProps
  | FoundationProps
  | IoniconsProps
  | MaterialCommunityIconsProps
  | ZocialProps
  | OcticonsProps
  | SimpleLineIconsProps
  | FontistoProps
  | FeatherProps
  | FontAwesome5Props;

export type IconType =
  | "AntDesign"
  | "Entypo"
  | "Ionicons"
  | "SimpleLineIcons"
  | "EvilIcons"
  | "MaterialIcons"
  | "FontAwesome"
  | "FontAwesome5"
  | "Foundation"
  | "MaterialCommunityIcons"
  | "Octicons"
  | "Fontisto"
  | "Zocial"
  | "Feather";

const IconComponent = (props: IconProps) => {
  const { name, color, size, onPress, style, ...textProps } = props;
  const commonProps = {
    name,
    color,
    size,
    onPress,
    style,
  };

  switch (props.type) {
    case "AntDesign": {
      return <AntDesign {...textProps} {...commonProps} />;
    }

    case "Entypo": {
      return <Entypo {...textProps} {...commonProps} />;
    }

    case "Ionicons": {
      return <Ionicons {...textProps} {...commonProps} />;
    }

    case "SimpleLineIcons": {
      const SimpleLineIcons =
        require("react-native-vector-icons/SimpleLineIcons").default;
      return <SimpleLineIcons {...textProps} {...commonProps} />;
    }

    case "EvilIcons": {
      return <EvilIcons {...textProps} {...commonProps} />;
    }

    case "MaterialIcons": {
      return <MaterialIcons {...textProps} {...commonProps} />;
    }

    case "FontAwesome": {
      return <FontAwesome {...textProps} {...commonProps} />;
    }

    case "FontAwesome5": {
      const { brand, solid } = props;

      return (
        <FontAwesome5
          {...textProps}
          {...commonProps}
          brand={brand}
          solid={solid}
        />
      );
    }

    case "Foundation": {
      return <Foundation {...textProps} {...commonProps} />;
    }

    case "MaterialCommunityIcons": {
      return <MaterialCommunityIcons {...textProps} {...commonProps} />;
    }

    case "Zocial": {
      return <Zocial {...textProps} {...commonProps} />;
    }

    case "Octicons": {
      return <Octicons {...textProps} {...commonProps} />;
    }

    case "Fontisto": {
      return <Fontisto {...textProps} {...commonProps} />;
    }

    case "Feather": {
      return <Feather {...textProps} {...commonProps} />;
    }
    default: {
      return <FontAwesome {...textProps} {...commonProps} />;
    }
  }
};

IconComponent.defaultProps = {
  size: 20,
  style: {},
  onPress: () => null,
  color: "#757575",
};

export const Icon = IconComponent;
