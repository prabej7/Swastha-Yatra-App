import { Pressable, StyleSheet } from "react-native";
import View from "./View";
import Text from "./Text";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import IconsIcons from "@expo/vector-icons/Ionicons";
import { light } from "@/constants/ColorTheme";
import { useRouter } from "expo-router";

interface Props {
  home?: boolean;
  find?: boolean;
  appointment?: boolean;
  chats?: boolean;
  accounts?: boolean;
}

const NavBar: React.FC<Props> = ({
  home,
  find,
  appointment,
  chats,
  accounts,
}) => {
  const router = useRouter();
  return (
    <>
      <View style={styles.container}>
        <Pressable
          style={styles.iconContainer}
          onPress={() => router.push("/(user)")}
        >
          <Feather
            name="home"
            style={[styles.icon, { color: home ? light.blue : light.text }]}
          />
          <Text
            style={[styles.text, { color: home ? light.blue : light.text }]}
          >
            Home
          </Text>
        </Pressable>
        <Pressable
          style={styles.iconContainer}
          onPress={() => router.push("(user)/find")}
        >
          <MaterialCommunityIcons
            name="magnify"
            style={[styles.icon, { color: find ? light.blue : light.text }]}
          />
          <Text
            style={[styles.text, { color: find ? light.blue : light.text }]}
          >
            Find
          </Text>
        </Pressable>
        <Pressable
          style={styles.iconContainer}
          onPress={() => router.push("/(user)/appointments")}
        >
          <MaterialCommunityIcons
            name="calendar-blank-outline"
            style={[
              styles.icon,
              { color: appointment ? light.blue : light.text },
            ]}
          />
          <Text
            style={[
              styles.text,
              { color: appointment ? light.blue : light.text },
            ]}
          >
            Appointments
          </Text>
        </Pressable>
        <Pressable
          style={styles.iconContainer}
          onPress={() => router.push("/(user)/chats")}
        >
          <IconsIcons
            name="chatbubble-ellipses-outline"
            style={[styles.icon, { color: chats ? light.blue : light.text }]}
          />
          <Text
            style={[styles.text, { color: chats ? light.blue : light.text }]}
          >
            Chats
          </Text>
        </Pressable>
        <Pressable
          style={styles.iconContainer}
          onPress={() => router.push("/(user)/account")}
        >
          <Feather
            name="user"
            style={[styles.icon, { color: accounts ? light.blue : light.text }]}
          />
          <Text
            style={[styles.text, { color: accounts ? light.blue : light.text }]}
          >
            Account
          </Text>
        </Pressable>
      </View>
    </>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  text: {
    fontFamily: "Regular",
    fontSize: 18,
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
  },
});
