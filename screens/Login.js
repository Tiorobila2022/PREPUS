import React, { Component, useState, createRef } from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView, RefreshControl } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Styles from "../style/style";
import axios from "./axios";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

function Login({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password_hash, setPassword_hash] = useState("");
  const [cekValidEmail, setCekValidEmail] = useState(false);

  // const [token, setToken] = useState(null);

  const handleCekEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCekValidEmail(false);
    } else {
      setCekValidEmail(true);
    }
  };
  0;

  const cekPasswordValidate = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return "Kata sandi tidak boleh mengandung spasi";
    }

    // const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    // if (!isContainsUppercase.test(value)) {
    //   return "Kata sandi harus memiliki setidaknya satu Karakter Huruf Besar";
    // }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return "Kata sandi harus memiliki setidaknya satu Karakter Huruf Kecil";
    }

    // const isContainsNumber = /^(?=.*[0-9]).*$/;
    // if (!isContainsNumber.test(value)) {
    //   return "Kata sandi harus mengandung setidaknya satu Digit";
    // }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return "Kata sandi harus terdiri dari 8-16 Karakter.";
    }

    return null;
  };

  const handleLogin = async () => {
    let data = {
      email: email,
      password_hash: password_hash,
    };
    await axios
      .post("auth", data)
      .then(async (res) => {
        if (res.data.status === "sukses") {
          // console.log(res.data.access_token);
          // await AsyncStorage.setItem("token", res.data.access_token).then(navigation.replace("Home"));
          await AsyncStorage.setItem("id", res.data.id);
          await AsyncStorage.setItem("token", res.data.access_token);
          navigation.replace("Home");
        }

        if (!email) {
          alert("Silahkan isi Email dan Password terlebih dahulu");
          // console.log("email");
        }

        if (!password_hash) {
          alert("Silahkan isi Password terlebih dahulu");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Login Gagal !!");
      });
  };
  // const cekPassword = cekPasswordValidate(password_hash);
  // if (!cekPassword) {
  //   let data = { email: "tiohidayat@students.polmed.ac.id", password_hash: "metromatika" };
  //   user_api({ data });
  // user_api({
  //   email: email.toLocaleLowerCase(),
  //   password_hash: password_hash,
  // })
  //   .then((result) => {
  //     console.log(result);
  //     if (result.status == 200) {
  //       AsyncStorage.setItem("access_token", result.data.token);
  //       navigation.replace("Home");
  //     }
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
  //     alert("LOGIN");
  //   } else {
  //     alert(cekPassword);
  //   }
  // };

  // const tokenLogin = async () => {
  //   const value = await AsyncStorage.getItem("token");
  //   if (value !== null) {
  //     navigation.navigate("Home");
  //     console.log("Berhasil Login");
  //   }
  // };

  // tokenLogin();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <View style={Styles.header2}>
          <Image style={Styles.iconLogin} source={require("../assets/images/icon_login.png")} />
          <Text style={{ marginTop: 3, color: "#000000", fontSize: 18, fontWeight: "bold" }}>Silahkan Login Terlebih Dahulu !</Text>
        </View>

        <View style={[Styles.bodyForm]}>
          <Text style={{ marginTop: 3, color: "white", fontSize: 33, fontWeight: "bold", marginTop: 25, marginBottom: 35 }}>Login</Text>
          <View style={Styles.inputView}>
            <View style={{ flexDirection: "row" }}>
              <Image style={{ width: 20, height: 20, marginTop: 30, marginRight: 8 }} source={require("../assets/images/username.png")} />
              <TextInput
                style={Styles.inputText}
                placeholder="Masukkan Email"
                placeholderTextColor="#003f5c"
                value={email}
                onChangeText={(text) => handleCekEmail(text)}
              />
            </View>
          </View>
          {cekValidEmail ? <Text style={Styles.textFailed}>Format email salah</Text> : <Text style={Styles.textFailed}> </Text>}

          <View style={Styles.inputView}>
            <View style={{ flexDirection: "row" }}>
              <Image style={{ width: 20, height: 20, marginTop: 30, marginRight: 8 }} source={require("../assets/images/password.png")} />
              <TextInput
                style={Styles.inputText}
                placeholder="Masukkan Password"
                placeholderTextColor="#003f5c"
                value={password_hash}
                onChangeText={(text) => setPassword_hash(text)}
                secureTextEntry={true}
              />
            </View>
          </View>

          {email == "" || password_hash == "" || cekValidEmail == true ? (
            <TouchableOpacity disabled style={Styles.buttonDisable} onPress={() => handleLogin()}>
              <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}> Masuk </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={Styles.btnLogin} onPress={() => handleLogin()}>
              <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}> Masuk </Text>
            </TouchableOpacity>
          )}

          {/* <View style={{ paddingHorizontal: 60 }}>
            <GoogleLogin navigation={navigation} />
          </View> */}

          {/* <TouchableOpacity style={Styles.btnGgl}>
            <View style={{ flexDirection: "row" }}>
              <Image style={{ width: 23, height: 23, marginTop: 15, marginBottom: 15 }} source={require("../assets/images/google.png")} />
              <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", color: "black", marginTop: 11 }}> Login </Text>
            </View>
          </TouchableOpacity> */}

          {/* <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ color: "white", fontSize: 16, marginTop: 20 }}>Belum punya akun?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={{ color: "white", fontSize: 16, marginTop: 20, marginLeft: 5 }}> Klik Daftar</Text>
            </TouchableOpacity>
          </View> */}

          <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
            <Text style={{ color: "white", fontSize: 16, marginTop: 25 }}>Lupa Password ?</Text>
          </TouchableOpacity>

          <View></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login;
