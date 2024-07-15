import View from "./View";
import Text from "./Text";
import { StyleSheet, Image } from "react-native";
import { light } from "@/constants/ColorTheme";

interface Props {
  img: string;
  date: string;
  name: string;
  type: string;
}

const Card: React.FC<Props> = ({ img, date, name, type }) => {
  return (
    <>
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image
            source={{
              uri: img,
            }}
            style={styles.img}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.type}>{type}</Text>
        </View>
      </View>
    </>
  );
};

export default Card;

export const ChatCards: React.FC = () => {
  return (
    <>
      <View style={styles2.card}>
        <View style={styles.imgContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.img}
          />
        </View>
        <View style={styles2.details}>
          <Text style={styles.name}>Dr. Ram Kumar Shah</Text>
          <Text style={styles2.type}>Start a conversation.</Text>
        </View>
      </View>
    </>
  );
};

const styles2 = StyleSheet.create({
  details: {
    display: "flex",
    justifyContent: "center",
  },
  type: {
    color: light.blue,
    fontFamily: "Regular",
  },
  card: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 24,
    elevation: 2,
    padding: 24,
    borderRadius: 12,
  },
});

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 24,
    elevation: 2,
    borderRadius: 12,
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
