import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Styles from "../style/style";
import Login from "./Login";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem("token").then((value) => {
        value === null ? navigation.replace("Login") : navigation.replace("Home");
      });
    }, 1000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image style={Styles.Splash} source={require("../assets/images/metromatika.png")} />
      {/* <Text style={{ fontSize: 25 }}>METROMATIKA</Text> */}
    </View>
  );
};

export default Splash;
