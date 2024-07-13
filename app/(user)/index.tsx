import NavBar from "@/components/NavBar";
import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import View from "@/components/View";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { LocationProps } from "@/constants/Types";
import Input from "@/components/Input";
import Button from "@/components/Button";

const Home = () => {
  const [location, setLocation] = useState<LocationProps>({
    lat: 27.0449,
    lon: 84.8672,
  });
  const [region, setRegion] = useState({
    latitude: location.lat,
    longitude: location.lon,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        lat: location.coords.latitude,
        lon: location.coords.longitude, // Fixed this line
      });
    })();
  }, []);

  return (
    <>
      <View style={{ flex: 1, position: "relative" }}>
        <View style={styles.search}>
          <Input placeholder="Search city..." style={{ elevation: 5 }} />
          <Button text="Search" style={{ elevation: 5 }} />
        </View>
        <View>
          <MapView
            region={{
              latitude: location.lat,
              longitude: location.lon,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
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
    justifyContent: "space-evenly",
  },
});
