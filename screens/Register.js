import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, RefreshControl, ScrollView } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import Styles from "../style/style";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

function Register({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password_hash: "",
    active: "",
  });

  const [loading, setLoading] = useState(false);

  const onChangeFullname = (value) => {
    setUser({ ...user, fullname: value });
  };
  const onChangeEmail = (value) => {
    setUser({ ...user, email: value });
  };
  const onChangePass = (value) => {
    setUser({ ...user, password_hash: value });
  };
  const onChangeActive = (value) => {
    setUser({ ...user, active: value });
  };
  const saveData = () => {
    setLoading(true);
    var myHeader = new Headers();

    myHeader.append(
      "Authorization",
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRpb2hpZGF5YXRAc3R1ZGVudHMucG9sbWVkLmFjLmlkIiwiaWF0IjoxNjU3MDMzNzY2LCJleHAiOjE2NTcwMzczNjZ9.G_ziayQbD76pWC5NMy5UU9q7-KrVn8Ej5VEx_OEc4tM"
    );

    myHeader.append("Content-Type", "applications/json");

    fetch("http://192.168.1.7:8080/apipegawai", {
      method: "POST",
      headers: myHeader,
      body: JSON.stringify({
        fullname: user.fullname,
        email: user.email,
        password_hash: user.password_hash,
        active: user.active,
      }),
    })
      .then((response) => {
        setLoading(false);
        response.text();
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <View style={Styles.header2}>
          <Image style={Styles.iconLogin} source={require("../assets/images/icon_login.png")} />
        </View>

        <View style={Styles.bodyForm}>
          <Text style={Styles.textRegister}>Register</Text>

          <View style={Styles.inputView}>
            <View style={{ flexDirection: "row" }}>
              <Image style={{ width: 20, height: 20, marginTop: 15, marginRight: 7 }} source={require("../assets/images/fullname.png")} />
              <TextInput
                style={Styles.inputText}
                placeholder="Masukkan Nama Lengkap"
                onChangeText={(value) => onChangeFullname(value)}
                placeholderTextColor="#003f5c"
              />
            </View>
          </View>
          <View style={Styles.inputView}>
            <View style={{ flexDirection: "row" }}>
              <Image style={{ width: 20, height: 20, marginTop: 15, marginRight: 7 }} source={require("../assets/images/email.png")} />
              <TextInput
                style={Styles.inputText}
                placeholder="Masukkan Email"
                onChangeText={(value) => onChangeEmail(value)}
                placeholderTextColor="#003f5c"
              />
            </View>
          </View>
          <View style={Styles.inputView}>
            <View style={{ flexDirection: "row" }}>
              <Image style={{ width: 20, height: 20, marginTop: 15, marginRight: 7 }} source={require("../assets/images/password.png")} />
              <TextInput
                style={Styles.inputText}
                placeholder="Masukkan Password"
                onChangeText={(value) => onChangePass(value)}
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={Styles.inputView}>
            <View style={{ flexDirection: "row" }}>
              <Image style={{ width: 20, height: 20, marginTop: 15, marginRight: 7 }} source={require("../assets/images/username.png")} />
              <TextInput
                style={Styles.inputText}
                placeholder="Aktif atau tidak ?"
                onChangeText={(value) => onChangeActive(value)}
                placeholderTextColor="#003f5c"
              />
            </View>
          </View>

          <TouchableOpacity style={Styles.button} onPress={saveData}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}> {loading ? "Menyimpan..." : "Simpan"} </Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 50 }}>
            <Text style={{ color: "white", fontSize: 16, marginTop: 25 }}>Sudah Punya akun?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "white", fontSize: 16, marginTop: 25, marginLeft: 5 }}> Masuk</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Register;
