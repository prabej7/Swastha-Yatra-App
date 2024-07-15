import useTheme from "@/hooks/useTheme";
import { TextInput, TextInputProps } from "react-native";
import { StyleSheet } from "react-native";

const Input: React.FC<TextInputProps> = ({ style, ...props }) => {
  const theme = useTheme();
  return (
    <TextInput
      {...props}
      style={[styles.input, { backgroundColor: theme.secBg }, style]}
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
