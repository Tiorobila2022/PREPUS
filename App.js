import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./style/style";

// SCREENS
// import Register from "./screens/Register";
import IzinSakit from "./screens/IzinSakit";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Profil from "./screens/Profil";
import EditProfil from "./screens/EditProfil";
import Presensi from "./screens/presensi";
import Riwayat from "./screens/Riwayat";
import Biodata from "./screens/Biodata";
import EditAkun from "./screens/EditAkun";
import ResetPass from "./screens/ResetPass";
import Splash from "./screens/Splash";
import Coba from "./screens/Coba";
import Lokasi from "./screens/Lokasi";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Lokasi" component={Lokasi} /> */}
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Presensi" component={Presensi} />
        <Stack.Screen name="IzinSakit" component={IzinSakit} />
        <Stack.Screen name="Riwayat" component={Riwayat} />
        <Stack.Screen name="Biodata" component={Biodata} />
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="EditProfil" component={EditProfil} />
        <Stack.Screen name="EditAkun" component={EditAkun} />
        <Stack.Screen name="ResetPass" component={ResetPass} />

        {/* <Stack.Screen name="Register" component={Register} /> */}
        {/* <Stack.Screen name="coba" component={Coba} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
