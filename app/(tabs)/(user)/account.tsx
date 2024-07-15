import Button from "@/components/Button";
import Input from "@/components/Input";
import NavBar from "@/components/NavBar";
import Text from "@/components/Text";
import View from "@/components/View";
import { light } from "@/constants/ColorTheme";
import useTheme from "@/hooks/useTheme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, Keyboard } from "react-native";
import { Image } from "react-native";
import { useState, useEffect } from "react";
const Account = () => {
  const theme = useTheme();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <>
      <View style={{ flex: 1, paddingTop: 60, padding: 24 }}>
        <View>
          <Text style={[styles.title, { color: theme.text }]}>Account</Text>
        </View>
        <View style={styles.info}>
          <View>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              style={styles.img}
            />
          </View>
          <View style={styles.text}>
            <View>
              <Text style={styles.name}>Ram Kumar Saraf</Text>
              <Text style={styles.email}>ramsaraf@gmail.com</Text>
            </View>
            <MaterialIcons style={styles.icon} name="edit" />
          </View>
        </View>
        <View
          style={{
            marginTop: 30,
            position: "absolute",
            width: "100%",
            left: 22,
            top: "50%",
          }}
        >
          <Input
            placeholder="Old password"
            style={{
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 0,
              elevation: 1,
            }}
          />
          <Input
            placeholder="New Password"
            style={{
              borderTopRightRadius: 0,
              borderTopLeftRadius: 0,
              marginTop: 2,
              elevation: 1,
            }}
          />
          <Button text="Change Password" style={{ marginTop: 24 }}></Button>
        </View>
        <NavBar accounts />
      </View>
    </>
  );
};
export default Account;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Bold",
    fontSize: 18,
    textDecorationLine: "underline",
    textDecorationColor: light.grey,
    textAlign: "center",
  },
  img: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: light.blue,
    borderWidth: 1,
  },
  name: {
    fontFamily: "Bold",
    fontSize: 30,
    textAlign: "center",
  },
  email: {
    fontFamily: "Regular",
    textAlign: "center",
    fontSize: 18,
  },
  info: {
    display: "flex",
    alignItems: "center",
    gap: 24,
    marginTop: 24,
  },
  text: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 24,
  },
  icon: {
    fontSize: 24,
    color: light.text,
    paddingLeft: 24,
  },
});
