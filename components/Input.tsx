import useTheme from "@/hooks/useTheme";
import { TextInput, TextInputProps } from "react-native";

import { StyleSheet } from "react-native";

const Input: React.FC<TextInputProps> = ({ ...props }) => {
  const theme = useTheme();
  return (
    <TextInput
      {...props}
      style={[props.style, { backgroundColor: theme.secBg }, styles.input]}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    padding: 12,
    minWidth: 200,
    textAlign: "center",
    borderRadius: 7,
    fontFamily: "Regular",
  },
});
