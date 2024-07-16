import View from "@/components/View";
import Text from "@/components/Text";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import Header from "@/components/chats/Header";
import Input from "@/components/Input";
import { RadioButton } from "react-native-paper";
import Button from "@/components/Button";
import { Calendar } from "react-native-calendars";
import { useState } from "react";
import { light } from "@/constants/ColorTheme";
const AppintmentForm = () => {
  const { id } = useLocalSearchParams();
  const [selected, setSelected] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [mode, setMode] = useState<"offline" | "online">("online");
  return (
    <View style={styles.container}>
      <Header
        name="Dr. Ram Kumar Shah"
        type="Cardiologist"
        img="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Text style={styles.head}>Appointment Form</Text>
      <View style={styles.form}>
        <Input placeholder="Full name" />
        <Input placeholder="Age" />
        <Input placeholder="Phone no." />
        <Pressable
          style={{ padding: 13, backgroundColor: "white", borderRadius: 7 }}
          onPress={() => setOpen(!open)}
        >
          <Text style={{ textAlign: "center", color: "grey" }}>
            {open ? "Close date picker" : "Pick a date"}
          </Text>
        </Pressable>
        {open && (
          <Calendar
            onDayPress={(day: any) => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: "orange",
              },
            }}
          />
        )}

        <View style={styles.gender}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RadioButton
              value="male"
              status={gender == "male" ? "checked" : "unchecked"}
              onPress={() => setGender("male")}
              color={light.blue}
            />
            <Text>Male</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RadioButton
              value="male"
              status={gender == "female" ? "checked" : "unchecked"}
              onPress={() => setGender("female")}
              color={light.blue}
            />
            <Text>Female</Text>
          </View>
        </View>
        <View style={styles.gender}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RadioButton
              value="male"
              status={mode == "online" ? "checked" : "unchecked"}
              onPress={() => setMode("online")}
              color={light.blue}
            />
            <Text>Online</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RadioButton
              value="male"
              status={mode == "offline" ? "checked" : "unchecked"}
              onPress={() => setMode("offline")}
              color={light.blue}
            />
            <Text>Offline</Text>
          </View>
        </View>
        <Button text="Submit" />
      </View>
    </View>
  );
};

export default AppintmentForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 48,
  },
  gender: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 12,
  },
  head: {
    textAlign: "center",
    fontFamily: "Bold",
    marginTop: 12,
    marginBottom: 24,
    fontSize: 18,
    textDecorationLine: "underline",
  },
  form: {
    display: "flex",
    gap: 12,
  },
});
