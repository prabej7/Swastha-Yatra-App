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
          <Card
            date="7/10/2024"
            img="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
            name="Dr. Ram Kumar Shah"
            type="Cardiologist"
          />
          <Card
            date="7/10/2024"
            img="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
            name="Dr. Ram Kumar Shah"
            type="Cardiologist"
          />
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
    display: "flex",
    gap: 24,
  },
});
