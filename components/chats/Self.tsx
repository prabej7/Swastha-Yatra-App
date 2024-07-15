import { light } from "@/constants/ColorTheme";
import useTheme from "@/hooks/useTheme";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";

interface Props {
  text: string;
  time: string;
  self?: boolean;
}

const SelfMessage: React.FC<Props> = ({ text, time, self }) => {
  const theme = useTheme();
  return (
    <>
      <View style={[styles.main, { left: self ? 150 : 0 }]}>
        <View
          style={[
            { backgroundColor: self ? theme.blue : theme.grey },
            styles.container,
          ]}
        >
          <Text style={[styles.text, { color: self ? theme.bg : theme.text }]}>
            {text}
          </Text>
        </View>
        <Text style={styles.time}>{time}</Text>
      </View>
    </>
  );
};

export default SelfMessage;

const styles = StyleSheet.create({
  container: {
    height: "auto",
    maxWidth: "50%",
    padding: 12,
    borderRadius: 12,
    position: "relative",
  },
  text: {
    fontFamily: "Regular",
    fontSize: 18,
  },
  time: {
    color: light.grey,
    fontFamily: "Regular",
    marginLeft: 6,
  },
  main: {
    display: "flex",
    gap: 6,
  },
});
