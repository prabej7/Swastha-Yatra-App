import NavBar from "@/components/NavBar";
import { Alert, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import View from "@/components/View";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { ErrorProps, LocationProps } from "@/constants/Types";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { View as V } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { light } from "@/constants/ColorTheme";
import axios from "axios";
const Home = () => {
  const [place, setPlace] = useState<string>("");
  const [location, setLocation] = useState<LocationProps>({
    lat: 27.0449,
    lon: 84.8672,
  });

  const [mapLocation, setMapLocation] = useState<LocationProps>({
    lat: location.lat,
    lon: location.lon,
  });

  const [errorMsg, setErrorMsg] = useState<ErrorProps>({
    isError: false,
    msg: "",
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg({
          isError: true,
          msg: "Permission to access location was denied",
        });
        Alert.alert("Error", "Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      });
      setMapLocation({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      });
    })();
  }, []);

  const handleQuery = async () => {
    const apiKey = process.env.EXPO_PUBLIC_LOCATION_API;
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=${apiKey}`
      );
      setMapLocation({
        lat: response.data[0].lat,
        lon: response.data[0].lon,
      });
    } catch (error) {
      setErrorMsg({
        isError: true,
        msg: "Invalid city name!",
      });
      Alert.alert("Error", "Invalid city name!");
    }
  };

  return (
    <>
      <View style={{ flex: 1, position: "relative" }}>
        <V style={styles.search}>
          <Input
            style={{ elevation: 5, width: "auto", minWidth: 236 }}
            placeholder="Search city"
            onChangeText={setPlace}
          />
          <Button
            icon={
              <MaterialCommunityIcons
                name="magnify"
                style={{ color: light.bg, fontSize: 24 }}
              />
            }
            style={{ elevation: 5 }}
            onPress={handleQuery}
          />
        </V>
        <View>
          <MapView
            region={{
              latitude: mapLocation.lat,
              longitude: mapLocation.lon,
              latitudeDelta: 0.01,
              longitudeDelta: 0.015,
            }}
            zoomEnabled
            scrollEnabled
            style={{ height: "100%", width: "100%" }}
          >
            <Marker
              coordinate={{ latitude: location.lat, longitude: location.lon }}
              title={"You"}
            ></Marker>
          </MapView>
        </View>
        <NavBar home />
      </View>
    </>
  );
};

export default Home;

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
});
