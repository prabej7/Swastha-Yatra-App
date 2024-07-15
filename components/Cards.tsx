import View from "./View";
import Text from "./Text";
import { StyleSheet, Image } from "react-native";
const Card: React.FC = () => {
  return (
    <>
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.img}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.date}>7/13/2024</Text>
          <Text style={styles.name}>Dr. Ram Kumar Shah</Text>
          <Text style={styles.type}>Cardiologist</Text>
        </View>
      </View>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 24,
    elevation: 5,
    borderRadius: 7,
    backgroundColor: "white",
  },
  img: {
    height: 75,
    width: 75,
    borderRadius: 50,
  },
  imgContainer: {},
  name: {
    fontFamily: "Bold",
    fontSize: 18,
  },
  details: {},
  date: {
    fontFamily: "Medium",
  },
  type: {
    fontFamily: "Medium",
  },
});
