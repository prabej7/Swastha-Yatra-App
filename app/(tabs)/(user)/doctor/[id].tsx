import { StyleSheet } from "react-native";
import View from "@/components/View";
import Text from "@/components/Text";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "react-native";
import { light } from "@/constants/ColorTheme";
import AntDesign from "@expo/vector-icons/AntDesign";
import Button from "@/components/Button";
interface BioProps {
  img: string;
  name: string;
  type: string;
  bio: string;
}
const Bio: React.FC<BioProps> = ({ img, name, type, bio }) => {
  return (
    <>
      <View style={styles.box}>
        <Image source={{ uri: img }} style={styles.img} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.type}>{type}</Text>
        <Text style={styles.bio}>{bio}</Text>
      </View>
    </>
  );
};

interface ReviewProps {
  img: string;
  name: string;
  date: string;
  text: string;
}

const Review: React.FC<ReviewProps> = ({ img, name, date, text }) => {
  return (
    <>
      <View style={styles.reviewContainer}>
        <View style={styles.user}>
          <Image source={{ uri: img }} style={styles.reviewimg} />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.reviewName}>{name}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </>
  );
};

const Doctor = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Bio
        img="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Dr. Ram Kumar Shah"
        type="Cardiologist"
        bio="Narayani Hospital, located in Birgunj, is a prominent healthcare institution known for its commitment to providing comprehensive medical services and excellent patient care. "
      />
      <View>
        <Text style={styles.head}>Reviews</Text>
        <Review
          img="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Ram Kumar Saraf"
          date="21 July 2024"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
        <Text style={{ textAlign: "center", marginTop: 24, color: light.blue }}>
          See more reviews <AntDesign name="arrowright" />
        </Text>
        <Button
          text="Appoint"
          style={{ marginTop: 36 }}
          onPress={() => router.push(`/appointmentForm/${1}`)}
        ></Button>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 48,
  },
  img: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginBottom: 12,
  },
  name: {
    fontFamily: "Bold",
    fontSize: 24,
  },
  type: {
    fontFamily: "Regular",
    marginBottom: 12,
  },
  bio: {
    textAlign: "center",
    fontFamily: "Medium",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  head: {
    textAlign: "center",
    marginTop: 24,
    textDecorationLine: "underline",
    textDecorationColor: light.grey,
    textDecorationStyle: "solid",
  },
  reviewContainer: {
    backgroundColor: "white",
    elevation: 2,
    padding: 24,
    display: "flex",
    gap: 12,
    borderRadius: 12,
    marginTop: 24,
  },
  user: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  reviewName: {
    fontFamily: "Bold",
    fontSize: 18,
  },
  date: {
    fontFamily: "Regular",
    color: light.grey,
  },
  text: {
    fontFamily: "Regular",
  },
  reviewimg: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderColor: light.blue,
    borderWidth: 2,
  },
});
