import { useColorScheme } from "react-native";
import { dark, light } from "@/constants/ColorTheme";
const useTheme = () => {
  const theme = useColorScheme();
  return theme === "light" ? light : dark;
};

export default useTheme;
