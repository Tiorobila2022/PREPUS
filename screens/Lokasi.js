import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import * as Location from "expo-location";
import Styles from "../style/style";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.0015,
  longitudeDelta: 0.0015,
};

export default function Presensi() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [lokasi, setLokasi] = useState(initialState);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    status === "granted"
      ? setLocation(await Location.getCurrentPositionAsync({ enableHighAccuracy: true }))
      : setErrorMsg("Permission to access location was denied");

    console.log(location);
    alert(JSON.stringify(location));
  };

  return (
    <SafeAreaView>
      <View style={{ paddingVertical: 20, backgroundColor: "#1e5878" }}>
        <View style={{ flexDirection: "row", marginLeft: 20 }}>
          <Image
            style={{ width: 20, height: 20, marginTop: 5, marginRight: 4, backgroundColor: "#ffffff" }}
            source={require("../assets/images/schedule.png")}
          />
          <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 23 }}> Presensi</Text>
        </View>
      </View>
      <View style={{ paddingVertical: 80, backgroundColor: "#FAFAFA", justifyContent: "center", alignItems: "center" }}>
        <View style={Styles.content}>
          <TouchableOpacity>
            <Image style={{ width: 40, height: 32 }} source={require("../assets/images/camera.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ backgroundColor: "#1e5878", alignItems: "center" }}>
        <Text style={{ fontSize: 16, color: "white", marginTop: 10 }}>Tio Robila Hidayat</Text>
        <Text style={{ fontSize: 16, color: "white" }}>Presensi Masuk</Text>
        <Text style={{ fontSize: 16, color: "white", marginBottom: 10 }}>Anda berjarak 100 m dari titik pusat</Text>
      </View>

      <MapView style={Styles.map} initialRegion={lokasi} provider={PROVIDER_GOOGLE} showsUserLocation />

      <View style={Styles.fotBut}>
        <TouchableOpacity style={Styles.button4}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}> CATAT </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

