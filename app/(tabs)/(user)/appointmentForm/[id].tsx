import View from "@/components/View";
import Text from "@/components/Text";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";
import Header from "@/components/chats/Header";
import Input from "@/components/Input";
import { RadioButton } from "react-native-paper";
import DatePicker from "react-native-date-picker";
import { useState } from "react";
const AppintmentForm = () => {
  const { id } = useLocalSearchParams();
  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Header
        name="Dr. Ram Kumar Shah"
        type="Cardiologist"
        img="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <View>
        <Text style={styles.head}>Appointment Form</Text>
        <Input placeholder="Full name" />
        <Input placeholder="Age" />
        <Input placeholder="Phone no." />

        <View style={styles.gender}>
          <View>
            <Text>Male</Text>
            <RadioButton value="male" status="checked" />
          </View>
          <View>
            <Text>Female</Text>
            <RadioButton value="male" status="checked" />
          </View>
        </View>
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
});
