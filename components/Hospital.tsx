import {
  View as V,
  Text,
  Image,
  Pressable,
  StyleSheet,
  ViewStyle,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { light } from "@/constants/ColorTheme";

interface Props {
  id: number;
  img: string;
  name: string;
  address: string;
  style?: ViewStyle | ViewStyle[];
}

const Hospital: React.FC<Props> = ({ id, img, name, address, style }) => {
  return (
    <Link
      href={`/(hospital)/${id}`}
      asChild
      style={[style, { marginBottom: 24 }]}
    >
      <Pressable style={styles.hospital}>
        <Image
          source={{
            uri: img,
          }}
          style={styles.img}
        />
        <V style={styles.details}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitle}>{address}</Text>
        </V>
      </Pressable>
    </Link>
  );
};

export default Hospital;

const styles = StyleSheet.create({
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
