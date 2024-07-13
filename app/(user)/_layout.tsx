import { Stack, Tabs } from "expo-router";

const UserScreenStack = () => {
  return (
    <Tabs screenOptions={{ tabBarStyle: { display: "none" } }}>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="find" options={{ headerShown: false }} />
      <Tabs.Screen name="appointments" options={{ headerShown: false }} />
      <Tabs.Screen name="chats" options={{ headerShown: false }} />
      <Tabs.Screen name="account" options={{ headerShown: false }} />
    </Tabs>
  );
};

export default UserScreenStack;
