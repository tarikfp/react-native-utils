/* eslint-disable global-require */
import * as React from "react";
import type {
  ColorValue,
  GestureResponderEvent,
  TextProps,
  TextStyle,
} from "react-native";

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
      const AntDesign = require("react-native-vector-icons/AntDesign").default;
      return <AntDesign {...textProps} {...commonProps} />;
    }

    case "Entypo": {
      const Entypo = require("react-native-vector-icons/Entypo").default;
      return <Entypo {...textProps} {...commonProps} />;
    }

    case "Ionicons": {
      const Ionicons = require("react-native-vector-icons/Ionicons").default;
      return <Ionicons {...textProps} {...commonProps} />;
    }

    case "SimpleLineIcons": {
      const SimpleLineIcons =
        require("react-native-vector-icons/SimpleLineIcons").default;
      return <SimpleLineIcons {...textProps} {...commonProps} />;
    }

    case "EvilIcons": {
      const EvilIcons = require("react-native-vector-icons/EvilIcons").default;
      return <EvilIcons {...textProps} {...commonProps} />;
    }

    case "MaterialIcons": {
      const MaterialIcons =
        require("react-native-vector-icons/MaterialIcons").default;
      return <MaterialIcons {...textProps} {...commonProps} />;
    }

    case "FontAwesome": {
      const FontAwesome =
        require("react-native-vector-icons/FontAwesome").default;
      return <FontAwesome {...textProps} {...commonProps} />;
    }

    case "FontAwesome5": {
      const { brand, solid } = props;
      const FontAwesome5 =
        require("react-native-vector-icons/FontAwesome5").default;
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
      const Foundation =
        require("react-native-vector-icons/Foundation").default;
      return <Foundation {...textProps} {...commonProps} />;
    }

    case "MaterialCommunityIcons": {
      const MaterialCommunityIcons =
        require("react-native-vector-icons/MaterialCommunityIcons").default;
      return <MaterialCommunityIcons {...textProps} {...commonProps} />;
    }

    case "Zocial": {
      const Zocial = require("react-native-vector-icons/Zocial").default;
      return <Zocial {...textProps} {...commonProps} />;
    }

    case "Octicons": {
      const Octicons = require("react-native-vector-icons/Octicons").default;
      return <Octicons {...textProps} {...commonProps} />;
    }

    case "Fontisto": {
      const Fontisto = require("react-native-vector-icons/Fontisto").default;
      return <Fontisto {...textProps} {...commonProps} />;
    }

    case "Feather": {
      const Feather = require("react-native-vector-icons/Feather").default;
      return <Feather {...textProps} {...commonProps} />;
    }

    default: {
      const FontAwesome =
        require("react-native-vector-icons/FontAwesome").default;
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
