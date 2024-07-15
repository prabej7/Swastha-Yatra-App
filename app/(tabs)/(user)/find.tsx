import NavBar from "@/components/NavBar";
import Text from "@/components/Text";
import View from "@/components/View";
import { StyleSheet, Image, Pressable } from "react-native";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { View as V } from "react-native";
import { light } from "@/constants/ColorTheme";
import { Link } from "expo-router";
const Find = () => {
  return (
    <>
      <View style={{ flex: 1, padding: 30, paddingLeft: 24, paddingRight: 24 }}>
        <View style={styles.search}>
          <Input
            style={{ elevation: 5, width: 226 }}
            placeholder="Search city"
          />
          <Button text="Search" style={{ elevation: 5 }} />
        </View>
        <View style={styles.hospitals}>
          <Link href="/(hospital)/2" asChild>
            <Pressable style={styles.hospital}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                style={styles.img}
              />
              <V style={styles.details}>
                <Text style={styles.title}>Narayani Hospital</Text>
                <Text style={styles.subTitle}>
                  Chhapkaiya Rd 3, Birgunj 44300
                </Text>
              </V>
            </Pressable>
          </Link>
        </View>
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
  img: {
    height: 175,
    borderRadius: 7,
  },
  hospitals: {
    marginTop: 96,
    position: "relative",
  },
  hospital: {
    position: "relative",
    zIndex: 1,
  },
  title: {
    color: light.bg,
    fontFamily: "Bold",
    fontSize: 30,
    textShadowColor: "black",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
    paddingLeft: 24,
  },
  subTitle: {
    color: light.bg,
    fontFamily: "Regular",
    textShadowColor: "black",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    paddingLeft: 24,
    paddingBottom: 12,
  },
  details: {
    position: "absolute",
    bottom: 0,
  },
});
