import NavBar from "@/components/NavBar";
import View from "@/components/View";
import { StyleSheet, Image, Pressable } from "react-native";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { light } from "@/constants/ColorTheme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Hospital from "@/components/Hospital";
import { ScrollView } from "react-native";
const Find = () => {
  return (
    <>
      <View style={{ flex: 1, padding: 30, paddingLeft: 24, paddingRight: 24 }}>
        <View style={styles.search}>
          <Input
            style={{ elevation: 5, width: 226 }}
            placeholder="Search city"
          />
          <Button
            icon={
              <MaterialCommunityIcons
                name="magnify"
                style={{ color: light.bg, fontSize: 24 }}
              />
            }
            style={{ elevation: 5 }}
          />
        </View>
        <ScrollView style={styles.hospitals}>
          <Hospital
            name="Narayani Hospital"
            address="Chhapkaiya Rd 3, Birgunj 44300"
            img="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            id={1}
          />
        </ScrollView>
        <NavBar find />
      </View>
    </>
  );
};
export default Find;

const styles = StyleSheet.create({
  search: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: 48,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    height: 45,
    justifyContent: "space-between",
    paddingLeft: 24,
    paddingRight: 24,
  },

  hospitals: {
    marginTop: 96,
    display: "flex",
    gap: 24,
  },
});
