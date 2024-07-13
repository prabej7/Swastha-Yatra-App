import { Text as T } from "react-native";
import { TextProps } from "./Themed";
import useTheme from "@/hooks/useTheme";

const Text: React.FC<TextProps> = ({ ...props }) => {
  const theme = useTheme();
  return (
    <T {...props} style={[{ color: theme.text }, props.style]}>
      {props.children}
    </T>
  );
};

export default Text;
