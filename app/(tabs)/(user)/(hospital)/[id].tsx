import Hospital from "@/components/Hospital";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, StyleSheet, Pressable } from "react-native";
import Text from "@/components/Text";
import { light } from "@/constants/ColorTheme";
import Card from "@/components/Cards";
import { ScrollView } from "react-native";
import NavBar from "@/components/NavBar";
export default function HospitalDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  return (
    <View style={styles.constainer}>
      <Hospital
        name="Narayani Hospital"
        address="Chhapkaiya Rd 3, Birgunj 44300"
        img="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        id={1}
      />
      <Text style={styles.description}>
        Narayani Hospital, located in Birgunj, is a prominent healthcare
        institution known for its commitment to providing comprehensive medical
        services and excellent patient care.
      </Text>
      <View>
        <Text style={styles.head}>Doctors</Text>
        <ScrollView style={styles.doctors}>
          <Pressable
            style={{ paddingBottom: 24 }}
            onPress={() => router.push(`/doctor/${1}`)}
          >
            <Card
              date="Click to appoint!"
              img="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
              name="Dr. Ram Kumar Shah"
              type="Cardiologist"
            />
          </Pressable>
          <Pressable
            style={{ paddingBottom: 24 }}
            onPress={() => router.push(`/doctor/${1}`)}
          >
            <Card
              date="Click to appoint!"
              img="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
              name="Dr. Ram Kumar Shah"
              type="Cardiologist"
            />
          </Pressable>
        </ScrollView>
      </View>
      <NavBar find />
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
  },
  head: {
    fontFamily: "Bold",
    fontSize: 24,
    textDecorationColor: light.grey,
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
    marginBottom: 24,
    marginTop: 24,
  },
  description: {
    marginTop: 24,
    fontFamily: "Regular",
  },
  doctors: {
    width: "100%",
  },
});
