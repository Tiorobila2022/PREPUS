import React, { useState, useEffect } from "react";
import Styles from "../style/style";
import { SafeAreaView, Text, View, Image, FlatList, TouchableOpacity, TextInput, ScrollView, RefreshControl } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import axios from "axios";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

function EditAkun({ navigation }) {
  const [data, setData] = useState([]);
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const [refreshing, setRefreshing] = React.useState(false);
  const validate = (email) => {
    const expression =
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase());
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  ////   fetch tanpa axios
  // const [data, setData] = useState([]);
  // const getUser = async () => {
  //   try {
  //     let response = await fetch("http://localhost:8080/apipegawai");
  //     let json = await response.json();
  //     setData(json.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getUser();
  // }, []);

  //  fetch dengan axios
  const getUser = async () => {
    try {
      const res = await axios.get("http://192.168.1.7:8080/apiuser");
      console.log(res);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const renderItem = (item) => {
    return (
      <View>
        <Text>{item.fullname}</Text>
        <Text>{item.email}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      {/* <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}> */}
      <View style={Styles.header3}>
        <TouchableOpacity>
          <Image style={Styles.fprofil} source={require("../assets/images/PAS.jpg")} resizeMode="contain" />
        </TouchableOpacity>
        <Text style={{ marginTop: 10, color: "#FFFFFF", fontSize: 22, fontWeight: "bold" }}>TIO ROBILA HIDAYAT</Text>
      </View>

      <View style={{ padding: 15, paddingTop: 7 }}>
        <View style={Styles.content}>
          <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 5 }}>
            <Text style={{ marginTop: 10, color: "#777777", fontSize: 19, fontWeight: "bold", marginBottom: 5 }}>EDIT DATA AKUN </Text>
          </View>

          <View style={{ marginBottom: 10 }}>
            <Text style={Styles.textForm}>Nama Lengkap</Text>
            <TextInput style={Styles.input} underlineColorAndroid="rgba(0,0,0,0)" placeholder="Email Valid" selectionColor="#fff" keyboardType="email-address" onSubmitEditing={() => this.password.focus()} />
          </View>

          <View style={{ marginBottom: 10 }}>
            <Text style={Styles.textForm}>Email</Text>
            <TextInput style={Styles.input} onChangeText={onChangeText} value={text} placeholder="Nama Lengkap" />
          </View>

          <View style={{ marginBottom: 10 }}>
            <Text style={Styles.textForm}>No. HP</Text>
            <TextInput keyboardType="number-pad" style={Styles.input} onChangeText={onChangeNumber} value={number} placeholder="Nama Lengkap" />
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>Data dari API</Text>
            <FlatList data={data} renderItem={renderItem} key={(item) => item.id} />
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity style={Styles.button3}>
              <Icon name="account-edit" color="#ffffff" marg size={23} />
              <Text style={{ color: "white", fontSize: 15, fontWeight: "bold", marginLeft: 3 }}> Simpan </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

export default EditAkun;
