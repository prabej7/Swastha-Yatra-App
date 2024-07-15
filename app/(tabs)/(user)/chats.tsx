import NavBar from "@/components/NavBar";
import Text from "@/components/Text";
import View from "@/components/View";
import useTheme from "@/hooks/useTheme";
import { StyleSheet } from "react-native";
import Card, { ChatCards } from "@/components/Cards";
import { Link } from "expo-router";
const Chats = () => {
  const theme = useTheme();
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={[styles.title, { color: theme.text }]}>Chats</Text>
        </View>
        <View style={styles.chats}>
          <Link href="/1">
            <ChatCards />
          </Link>

          <ChatCards />
        </View>
        <NavBar chats />
      </View>
    </>
  );
};
export default Chats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center",
  },
  title: {
    fontFamily: "Bold",
    fontSize: 18,
    textDecorationLine: "underline",
  },
  chats: {
    marginTop: 24,
    display: "flex",
    gap: 24,
  },
});
