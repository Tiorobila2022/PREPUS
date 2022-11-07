import React from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Styles from "../style/style";

function Riwayat({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={Styles.header4}>
          <View style={{ flexDirection: "row", marginLeft: 20 }}>
            <Icon name="history" color="#FFFFFF" size={25} style={{ marginTop: 3, marginRight: 6 }} />
            <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 20 }}>Riwayat Kehadiran</Text>
          </View>
        </View>
        <View style={Styles.container}>
          <TouchableOpacity style={Styles.submenu2}>
            <View style={{ flexDirection: "row", fontSize: 15 }}>
              <View style={{ flexDirection: "column" }}>
                <View style={{ marginVertical: 28, marginRight: 5 }}>
                  <Image style={{ width: 95, height: 95 }} source={require("../assets/images/success.png")} />
                </View>
              </View>
              <View style={Styles.itemCard}>
                <Text style={Styles.itemCardValue}> Nama Pegawai</Text>
                <Text style={Styles.itemCardValue}> Waktu Presensi</Text>
                <Text style={Styles.itemCardValue}> Status</Text>
                <Text style={Styles.itemCardValue}> Keterangan</Text>
              </View>
              <View style={Styles.itemCard}>
                <Text style={Styles.itemCardValue}>: Tio Robila Hidayat</Text>
                <Text style={Styles.itemCardValue}>: 2022-09-09 07.30</Text>
                <Text style={Styles.itemCardValue}>: Hadir</Text>
                <Text style={Styles.itemCardValue}>: Kosong</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.submenu2}>
            <View style={{ flexDirection: "row", fontSize: 15 }}>
              <View style={{ flexDirection: "column" }}>
                <View style={{ marginVertical: 28, marginRight: 5 }}>
                  <Image style={{ width: 95, height: 95 }} source={require("../assets/images/failure.png")} />
                </View>
              </View>
              <View style={Styles.itemCard}>
                <Text style={Styles.itemCardValue}> Nama Pegawai</Text>
                <Text style={Styles.itemCardValue}> Waktu Presensi</Text>
                <Text style={Styles.itemCardValue}> Status</Text>
                <Text style={Styles.itemCardValue}> Keterangan</Text>
              </View>
              <View style={Styles.itemCard}>
                <Text style={Styles.itemCardValue}>: Tio Robila Hidayat</Text>
                <Text style={Styles.itemCardValue}>: 2022-09-09 07.30</Text>
                <Text style={Styles.itemCardValue}>: Tidak Hadir</Text>
                <Text style={Styles.itemCardValue}>: Tanpa Keterangan</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Riwayat;
