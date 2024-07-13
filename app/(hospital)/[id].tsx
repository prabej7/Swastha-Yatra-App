import { useRoute } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function HospitalDetail() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Hospital Detail Page</Text>
      <Text>Hospital ID:{id} </Text>
    </View>
  );
}
