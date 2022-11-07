// import React from "react";
import React, { useState, useCallback, useContext } from "react";
import { SafeAreaView, TouchableOpacity, StyleSheet, ScrollView, View, Text, StatusBar, Button, ImageBackground, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SelectList from "react-native-dropdown-select-list";
import Textarea from "react-native-textarea";

import Styles from "../style/style";

function IzinSakit({ navigation }) {
  const [selected, setSelected] = React.useState("");
  const [singleFile, setSingleFile] = useState("");

  const data = [
    { key: "Izin", value: "Izin" },
    { key: "Sakit", value: "Sakit" },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={Styles.header4}>
          <View style={{ flexDirection: "row", marginLeft: 20 }}>
            <Icon name="note-edit-outline" color="#FFFFFF" size={25} style={{ marginTop: 3, marginRight: 6 }} />
            <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 22 }}>Izin Sakit</Text>
            <TouchableOpacity>
              <Icon name="camera-outline" color="#FFFFFF" size={26} style={{ marginTop: 3, marginLeft: 195 }} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ borderColor: "#1e5878", paddingVertical: 60, backgroundColor: "#FFC0CB", borderWidth: 1 }}>
          <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 20 }}>FOTO</Text>
            <Image style={{ width: 40, height: 32 }} source={require("../assets/images/camera.png")} />
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: "#FAFAFA", borderColor: "black" }}>
          <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Nama Pegawai :</Text>
            <Text style={{ fontSize: 16 }}> Tio Robila Hidayat</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Jadwal :</Text>
            <Text style={{ fontSize: 16 }}> Presensi Hadir</Text>
          </View>
          <View style={{ justifyContent: "center", marginTop: 5, alignItems: "center", marginBottom: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Jam Awal: 11.00, Jam Akhir: 12.00</Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 15, paddingVertical: 15 }}>
          <SelectList data={data} setSelected={setSelected} />
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <Icon name="note-edit-outline" size={15} style={{ marginLeft: 10, marginTop: 3 }} />
            <Text style={{ fontSize: 15, fontWeight: "bold" }}> Keterangan :</Text>
          </View>
          <View style={{ paddingHorizontal: 5, marginTop: 5 }}>
            <Textarea
              containerStyle={Styles.textareaContainer}
              style={Styles.textarea}
              maxLength={120}
              placeholder={" Masukkan Keterangan di sini !"}
              placeholderTextColor={"#c7c7c7"}
              underlineColorAndroid={"transparent"}
            />
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 30 }}>
          <TouchableOpacity style={Styles.button4}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}> Simpan </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default IzinSakit;
