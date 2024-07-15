import Button from "@/components/Button";
import Input from "@/components/Input";
import Text from "@/components/Text";
import View from "@/components/View";
import { Link, Stack, Tabs, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet } from "react-native";

interface Form {
  fullName: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const router = useRouter();
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
    router.push("/(user)");
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Tabs.Screen options={{ tabBarStyle: { display: "none" } }} />
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <View style={styles.form}>
          <Input
            placeholder="Full name"
            onChangeText={(text) => handleChange(text, "fullName")}
            style={{ width: 250 }}
          />
          <Input
            placeholder="Email"
            onChangeText={(text) => handleChange(text, "email")}
          />
          <Input
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => handleChange(text, "password")}
          />
          <Button text="Register" onPress={handleSubmit} />
        </View>
        <Text style={styles.info}>
          Already have an account ?{" "}
          <Link href="/login" style={{ fontFamily: "Bold" }}>
            Login
          </Link>
        </Text>
      </View>
    </>
  );
};

export default Register;

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
