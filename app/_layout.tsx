import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/components/useColorScheme";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SF-Pro-Display-Bold.otf"),
    Bold: require("../assets/fonts/SF-Pro-Display-Bold.otf"),
    Black: require("../assets/fonts/SF-Pro-Display-Black.otf"),
    Heavy: require("../assets/fonts/SF-Pro-Display-Heavy.otf"),
    Light: require("../assets/fonts/SF-Pro-Display-Light.otf"),
    Medium: require("../assets/fonts/SF-Pro-Display-Medium.otf"),
    Regular: require("../assets/fonts/SF-Pro-Display-Regular.otf"),
    SemiBold: require("../assets/fonts/SF-Pro-Display-Semibold.otf"),
    Thin: require("../assets/fonts/SF-Pro-Display-Thin.otf"),
    UltraThin: require("../assets/fonts/SF-Pro-Display-Ultralight.otf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(user)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </ThemeProvider>
  );
}
