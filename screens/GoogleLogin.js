import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import axios from "./axios";

WebBrowser.maybeCompleteAuthSession();

function GoogleLogin({ navigation }) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "",
    iosClientId: "",
    androidClientId: "305587586217-5e51k92tg10a1miq4mdgd3v4n9c78n47.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      loginWithGoogle(authentication.accessToken);
    }
  }, [response]);

  const loginWithGoogle = (token) => {
    axios
      .post("auth/google", {
        token: token,
      })
      .then((res) => {
        if (res.data.status === "success") {
          let role = res.data.user.role.toString();
          AsyncStorage.setItem("@user", JSON.stringify(res.data.user));
          AsyncStorage.setItem("@token", res.data.token);
          navigation.navigate("Home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = async () => {
    await promptAsync();
  };

  return (
    <TouchableOpacity style={Styles.btnGgl} onPress={() => handleLogin()}>
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <Image source={require("../assets/images/google.png")} style={{ resizeMode: "contain", width: 30, height: 30, marginEnd: 5 }} />
        <Text style={Styles.googleButtonText}>Login Dengan Google</Text>
      </View>
    </TouchableOpacity>
  );
}

export default GoogleLogin;
