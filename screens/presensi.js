import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import * as Location from "expo-location";
import Styles from "../style/style";
import MapView, { Circle, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import haversine from "haversine";
import axios from "./axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const initialState = {
//   latitude: 28.527582,
//   longitude: 77.0688969,
//   latitudeDelta: 0.0011,
//   longitudeDelta: 0.0011,
//   accuracy: 10,
// };

export default function Presensi() {
  // const [location, setLocation] = useState(null);
  //3.562926491901457, 98.6554636;
  // const [errorMsg, setErrorMsg] = useState(null);

  // lokasi polmed = 3.562926491901457, 98.6554636 || 3.563080040533343, 98.655816746973
  // lokasi MMT = 3.6012775060976, 98.65456951534398

  const radius = 100;
  const polmedLat = 3.6012775060976;
  const polmedLon = 98.65456951534398;
  const [mylat, setMylat] = useState(0);
  const [mylon, setMylon] = useState(0);
  const [distance, setDistance] = useState(0);
  const [presStatus, setPresStatus] = useState("-");

  useEffect(() => {
    getLocation();
    // checkStats();
  });

  const checkStats = async () => {
    let id = await AsyncStorage.getItem("id");
    axios.get("waktu/" + id).then((res) => {
      if (res.data.tipePresensi === "Tetap") {
        setPresStatus("Anda Sedang Berada di Jam Kerja");
      }
    });
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setMylat(location.coords.latitude);
    setMylon(location.coords.longitude);

    calculateDistance();
  };

  const calculateDistance = () => {
    const calcDistance = haversine({ latitude: mylat, longitude: mylon }, { latitude: polmedLat, longitude: polmedLon }, { unit: "meter" });
    setDistance(calcDistance);
  };

  const checkIfInRange = async () => {
    if (distance < radius) {
      console.log("run...");
      const id = await AsyncStorage.getItem("id");
      axios.get("waktu/" + id).then((res) => {
        if (res.data.status === 200) {
          if (res.data.tipePresensi === "Masuk") {
            setPresStatus("Anda Sedang Berada di Jam Kerja");
            alert(res.data.message);
          } else if (res.data.tipePresensi === "Pulang") {
            setPresStatus("-");
            alert(res.data.message);
          }
        } else {
          setPresStatus("-");
          alert(res.data.message);
        }
      });
    } else {
      alert("anda tidak berada di Lingkup Lokasi");
    }
  };

  // const getLocation = async () => {
  //   let { status } = await Location.requestForegroundPermissionsAsync();
  //   const getMyLocation = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
  //   //alert(JSON.stringify(getMyLocation));
  //   const res = geolib.getPreciseDistance(
  //     { latitude: 3.6007981, longitude: 98.6544764 },
  //     { latitude: getMyLocation.coords.latitude, longitude: getMyLocation.coords.longitude }
  //     // { latitude: 3.6007981, longitude: 98.6544764 }
  //   );
  //   alert("my location: " + JSON.stringify(getMyLocation.coords) + "campus location: " + JSON.stringify(initialState));
  //   console.log(res);
  // getLocation;
  // let { status } = await Location.requestForegroundPermissionsAsync();
  // status === "granted"
  //   ? setLocation(await Location.getCurrentPositionAsync({ enableHighAccuracy: true }))
  //   : setErrorMsg("Permission to access location was denied");
  // // console.log(location.coords.latitude);
  // alert(JSON.stringify(location.coords));
  // let pdis = getDistance(
  //   { latitude: location.coords.latitude, longitude: 98.65449441012541 },
  //   { latitude: initialState.latitude, longitude: initialState.longitude }
  // );

  //alert(pdis);

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       setErrorMsg("Permission to access location was denied");
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //     // console.log(location);
  //   })();

  //   setLat(coords.latitude);
  //   setLong(coords.longitude);
  //   console.log(lat);
  // }, []);

  // const calculatePreciseDistance = () => {
  //   // const distance = getPreciseDistance(
  //   //   { latitude: 98.65449441012541, longitude: 3.6010740581143597 },
  //   //   { latitude: initialState.latitude, longitude: initialState.longitude }
  //   // );
  //   // console.log(distance);
  //   var pdis = getPreciseDistance(
  //     { latitude: location.coords.latitude, longitude: location.coords.longitude },
  //     { latitude: initialState.latitude, longitude: initialState.longitude }
  //   );
  //   alert(`Precise Distance\n\n${pdis} Meter\nOR\n${pdis / 1000} KM`);
  // };
  // 3.6010740581143597, 98.65449441012541
  return (
    <SafeAreaView>
      <View style={{ paddingVertical: 15, backgroundColor: "#1e5878" }}>
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
        <Text style={{ fontSize: 16, color: "white", marginTop: 10, fontWeight: "bold" }}>Tio Siregar</Text>
        <Text style={{ fontSize: 16, color: "white" }}>Status Presensi :</Text>
        <Text style={{ fontSize: 16, color: "white", marginBottom: 10 }}>{presStatus}</Text>
      </View>
      <MapView style={Styles.map} provider={PROVIDER_GOOGLE} showsUserLocation={true}>
        <Marker
          // coordinate={{ latitude: 3.5629481, longitude: 98.6554468 }}
          coordinate={{ latitude: polmedLat, longitude: polmedLon }}
          title="Gedung N"
          description="Politeknik Negeri Medan"
          pinColor="purple"
        />
        <Circle center={{ latitude: polmedLat, longitude: polmedLon }} radius={radius} />
      </MapView>
      {/* 3.562986393271129, 98.65611303747819 */}
      <View style={Styles.fotBut}>
        <TouchableOpacity style={[Styles.button4, { marginTop: 13 }]} onPress={checkIfInRange}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}> CATAT </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
