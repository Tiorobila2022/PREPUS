import React from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity, FontAwesome } from "react-native";
import Styles from "../style/style";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Profil({ navigation }) {
  return (
    <SafeAreaView>
      <View style={Styles.header}>
        <TouchableOpacity>
          <Image style={Styles.fprofil} source={require("../assets/images/PAS.jpg")} resizeMode="contain" />
        </TouchableOpacity>
        <Text style={{ marginTop: 15, color: "#FFFFFF", fontSize: 22, fontWeight: "bold" }}>TIO ROBILA HIDAYAT</Text>
      </View>

      <View style={{ marginTop: 8 }}>
        <View style={Styles.menuItem}>
          <Icon name="account" color="#777777" size={23} />
          <Text style={Styles.menuItemText}>Tio Robila Hidayat</Text>
        </View>
        <View style={Styles.menuItem}>
          <Icon name="cake-variant" color="#777777" size={23} />
          <Text style={Styles.menuItemText}>Sei Kasih, 15 Juni 2000</Text>
        </View>
        <View style={Styles.menuItem}>
          <Icon name="map-marker-radius" color="#777777" size={23} />
          <Text style={Styles.menuItemText}>Bilah Hilir, Labuhanbatu</Text>
        </View>
        <View style={Styles.menuItem}>
          <Icon name="phone" color="#777777" size={23} />
          <Text style={Styles.menuItemText}>+62 822-6160-6336</Text>
        </View>
        <View style={Styles.menuItem}>
          <Icon name="email" color="#777777" size={23} />
          <Text style={Styles.menuItemText}>tiosiregar2017@gmail.com</Text>
        </View>
        <View style={Styles.menuItem}>
          <Icon name="bag-suitcase" color="#777777" size={23} />
          <Text style={Styles.menuItemText}>Administrator</Text>
        </View>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
        <TouchableOpacity style={Styles.button2} onPress={() => navigation.navigate("EditProfil")}>
          <Icon name="account-edit" color="#ffffff" marg size={23} />
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold", marginLeft: 3 }}> Edit Profil </Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity style={Styles.button2} onPress={() => navigation.navigate("ResetPass")}>
          <Icon name="lock-reset" color="#ffffff" marg size={23} />
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold", marginLeft: 3 }}> Reset Password </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Profil;
