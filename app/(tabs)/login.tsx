import Button from "@/components/Button";
import Input from "@/components/Input";
import Text from "@/components/Text";
import View from "@/components/View";
import { Link, Stack, Tabs } from "expo-router";
import { useState } from "react";
import { StyleSheet } from "react-native";

interface Form {
  fullName: string;
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<Form>({
    fullName: "",
    email: "",
    password: "",
  });
  const handleChange = (text: string, field: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: text,
    }));
  };
  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Tabs.Screen options={{ tabBarStyle: { display: "none" } }} />
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.form}>
          <Input
            placeholder="Email"
            onChangeText={(text) => handleChange(text, "email")}
            style={{ width: 250 }}
          />
          <Input
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => handleChange(text, "password")}
          />
          <Button text="Login" onPress={handleSubmit} />
        </View>
        <Text style={styles.info}>
          Don't have an account ?{" "}
          <Link href="/register" style={{ fontFamily: "Bold" }}>
            Register
          </Link>
        </Text>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Bold",
    fontSize: 42,
    marginBottom: 24,
  },
  info: {
    fontFamily: "Regular",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
    marginBottom: 24,
  },
});
