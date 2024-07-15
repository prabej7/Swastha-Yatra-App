import {
  Pressable,
  Text,
  TextStyle,
  ViewStyle,
  StyleSheet,
} from "react-native";
import { light } from "@/constants/ColorTheme";
import useTheme from "@/hooks/useTheme";
interface ButtonProps {
  style?: ViewStyle | ViewStyle[];
  text?: string;
  onPress?: () => void;
  textStyle?: TextStyle | TextStyle[];
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  style,
  text,
  onPress,
  textStyle,
  icon,
}) => {
  const theme = useTheme();

  if (icon) {
    return (
      <>
        <Pressable style={[style, styles.button]} onPress={onPress}>
          {icon}
        </Pressable>
      </>
    );
  }
  return (
    <>
      <Pressable style={[style, styles.button]} onPress={onPress}>
        <Text style={[textStyle, styles.text]}>{text}</Text>
      </Pressable>
    </>
  );
};

export default Button;

export const SecButon: React.FC<ButtonProps> = ({
  style,
  text,
  onPress,
  textStyle,
}) => {
  const theme = useTheme();
  return (
    <>
      <Pressable
        style={[style, styles.secButton, { backgroundColor: theme.secBg }]}
        onPress={onPress}
      >
        <Text style={[textStyle, styles.secText, { color: theme.text }]}>
          {text}
        </Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    paddingRight: 24,
    paddingLeft: 24,
    backgroundColor: light.blue,
    borderRadius: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  secButton: {
    padding: 12,
    paddingRight: 24,
    paddingLeft: 24,

    borderRadius: 7,
  },
  secText: { fontFamily: "Regular", textAlign: "center" },
  text: {
    fontFamily: "Regular",
    textAlign: "center",
    color: light.bg,
  },
});
