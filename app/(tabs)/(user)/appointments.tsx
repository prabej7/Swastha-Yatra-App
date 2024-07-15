import NavBar from "@/components/NavBar";
import Text from "@/components/Text";
import View from "@/components/View";
import Input from "@/components/Input";
import { StyleSheet } from "react-native";
import Button from "@/components/Button";
import Card from "@/components/Cards";
const Appointments = () => {
  return (
    <>
      <View style={{ flex: 1, position: "relative", padding: 24 }}>
        <View style={styles.search}>
          <Input
            style={{ elevation: 5, width: 226 }}
            placeholder="Search appointents"
          />
          <Button text="Search" style={{ elevation: 5 }} />
        </View>
        <View style={styles.appointments}>
          <Card />
        </View>
        <NavBar appointment />
      </View>
    </>
  );
};
export default Appointments;

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
  appointments: {
    marginTop: 96,
  },
});
