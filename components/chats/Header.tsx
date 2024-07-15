import View from "../View";
import Text from "../Text";
import { View as V } from "react-native";
import { StyleSheet, Image } from "react-native";
import { light } from "@/constants/ColorTheme";

interface Props {
  img: string;
  name: string;
  type: string;
}

const Header: React.FC<Props> = ({ img, name, type }) => {
  return (
    <>
      <View style={styles.user}>
        <V style={styles.imgContainer}>
          <Image
            source={{
              uri: img,
            }}
            style={styles.img}
          />
        </V>
        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <V style={styles.typebox}>
            <Text style={styles.type}>{type}</Text>
            <V style={styles.line}></V>
          </V>
        </View>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  user: {
    display: "flex",
    flexDirection: "row",
    padding: 24,
    marginTop: 12,
    gap: 12,
    justifyContent: "center",
  },
  imgContainer: {},
  img: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderColor: light.blue,
    borderWidth: 1,
  },
  details: {},
  name: {
    fontFamily: "Bold",
    fontSize: 18,
  },
  type: {
    fontFamily: "Regular",
    width: "auto",
  },
  typebox: {
    width: "auto",
    display: "flex",
    flexDirection: "row",
  },
  line: {
    height: 5,
    backgroundColor: light.grey,
  },
});
