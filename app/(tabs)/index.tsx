import Button, { SecButon } from "@/components/Button";
import Text from "@/components/Text";
import View from "@/components/View";
import { Redirect, router, Stack, Tabs, useRouter } from "expo-router";
import { StyleSheet, Image } from "react-native";

export default function TabOneScreen() {
  const route = useRouter();
  return (
    <>
      <Redirect href="/(user)" />
      <Stack.Screen options={{ headerShown: false }} />
      <Tabs.Screen options={{ tabBarStyle: { display: "none" } }} />
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/sapiens.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Swastha Yatra</Text>
        <Text style={styles.subTitle}>“We appreciate your time.”</Text>
        <View style={styles.action}>
          <Button text="Register" onPress={() => router.push("/register")} />
          <SecButon text="Login" onPress={() => router.push("/login")} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    fontFamily: "Bold",
  },
  subTitle: {
    fontFamily: "Regular",
  },
  image: {
    height: 200,
    width: 200,
  },
  action: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    marginTop: 24,
  },
});
