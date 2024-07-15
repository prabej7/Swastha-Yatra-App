import Text from "@/components/Text";
import View from "@/components/View";
import { Pressable, View as V } from "react-native";
import { light } from "@/constants/ColorTheme";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import SelfMessage from "@/components/chats/Self";
import Header from "@/components/chats/Header";
import Input from "@/components/Input";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Messages: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <Header
          img="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Dr. Ram Kumar Shah"
          type="Cardiologist"
        />
        <View style={styles.chatbox}>
          <SelfMessage text="Hi, when are you free ?" time="1:44 pm" self />
          <SelfMessage text="Your appointment is at 3:00 pm." time="1:45 pm" />
        </View>
        <View style={styles.msg}>
          <Input
            placeholder="Message..."
            style={styles.input}
            placeholderTextColor={light.grey}
          />
          <Pressable style={styles.button}>
            <MaterialCommunityIcons name="send" style={styles.icon} />
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    position: "relative",
  },
  title: {
    fontFamily: "Bold",
    fontSize: 18,
    textDecorationLine: "underline",
  },

  chatbox: {
    display: "flex",
    gap: 12,
  },
  input: {
    textAlign: "left",
    fontFamily: "Light",
    width: 236,
  },
  button: {
    backgroundColor: light.blue,
    width: 75,
    borderRadius: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: light.bg,
    fontSize: 30,
  },
  msg: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    padding: 24,
    gap: 24,
  },
});
