import React from "react";
import Styles from "../style/style";
import { SafeAreaView, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "react-native/Libraries/NewAppScreen";

function EditProfil({ navigation }) {
  return (
    <SafeAreaView>
      <View style={Styles.header}>
        <View>
          <Image style={Styles.fprofil} source={require("../assets/images/PAS.jpg")} resizeMode="contain" />
        </View>
        <Text style={{ marginTop: 10, color: "#FFFFFF", fontSize: 22, fontWeight: "bold" }}>TIO ROBILA HIDAYAT</Text>
        <Text style={{ marginTop: 3, color: "#FFFFFF", fontSize: 15 }}>tiorobila@gmail.com</Text>
        <Text style={{ marginTop: 3, color: "#FFFFFF", fontSize: 15 }}>Administrator</Text>
      </View>

      <View style={Styles.content}>
        <View style={Styles.contEdProf}>
          <TouchableOpacity style={Styles.button3} onPress={() => navigation.navigate("EditAkun")}>
            <Icon name="account-edit" color="#ffffff" marg size={23} />
            <Text style={Styles.textBtnEdProf}> Edit Profil </Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.contEdProf}>
          <TouchableOpacity style={Styles.button3} onPress={() => navigation.navigate("ResetPass")}>
            <Icon name="lock-reset" color="#ffffff" marg size={23} />
            <Text style={Styles.textBtnEdProf}> Reset Password </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default EditProfil;
