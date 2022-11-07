import React, { useEffect } from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity, RefreshControl, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Styles from "../style/style";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

function Home({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    getToken();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    navigation.navigate("Login");
  };

  const getToken = async () => {
    const token = await AsyncStorage.getItem("token");
    // alert(token);
    alert("Berhasil Login");
  };

  return (
    <SafeAreaView>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <View style={Styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("EditProfil")}>
            <Image style={{ width: 25, height: 25, marginLeft: 320 }} source={require("../assets/images/setting.png")} />
          </TouchableOpacity>
          <View>
            <Image style={Styles.fprofil} source={require("../assets/images/default.png")} resizeMode="contain" />
          </View>
          <Text style={{ marginTop: 10, color: "#FFFFFF", fontSize: 22, fontWeight: "bold" }}>Tio Siregar</Text>
          <Text style={{ marginTop: 3, color: "#FFFFFF", fontSize: 15 }}>tiosiregar2017@gmail.com</Text>
          <Text style={{ marginTop: 3, color: "#FFFFFF", fontSize: 15 }}>Pegawai</Text>
        </View>

        <View style={{ padding: 9 }}>
          <View style={Styles.content}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity onPress={() => navigation.navigate("Presensi")} style={Styles.submenu}>
                <Image style={Styles.submenuImage} source={require("../assets/images/absensi.png")} />
                <Text style={Styles.textMenu}>Presensi</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("IzinSakit")} style={Styles.submenu}>
                <Image style={Styles.submenuImage} source={require("../assets/images/izinsakit.png")} />
                <Text style={Styles.textMenu}>Izin atau Sakit</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity style={Styles.submenu} onPress={() => navigation.navigate("Riwayat")}>
                <Image style={Styles.submenuImage} source={require("../assets/images/histori.png")} />
                <Text style={Styles.textMenu}>Riwayat Kehadiran</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Styles.submenu} onPress={() => navigation.navigate("Biodata")}>
                <Image style={Styles.submenuImage} source={require("../assets/images/biodata.png")} />
                <Text style={Styles.textMenu}>Biodata Pegawai</Text>
              </TouchableOpacity>
            </View>

            <View style={Styles.btnOut}>
              <TouchableOpacity onPress={logout} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Image style={{ width: 40, height: 40 }} source={require("../assets/images/keluar.png")} />
                <Text style={Styles.textMenu}> Keluar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
