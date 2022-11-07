import React from "react";
import Styles from "../style/style";
import { SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView, RefreshControl } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "react-native/Libraries/NewAppScreen";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

function EditProfil({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <SafeAreaView>
      <ScrollView style={{ marginTop: 25 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <View style={Styles.header3}>
          <TouchableOpacity>
            <Image style={Styles.fprofil} source={require("../assets/images/PAS.jpg")} resizeMode="contain" />
          </TouchableOpacity>
          <Text style={{ marginTop: 10, color: "#FFFFFF", fontSize: 22, fontWeight: "bold" }}>TIO ROBILA HIDAYAT</Text>
        </View>

        <View style={{ padding: 15, paddingTop: 7 }}>
          <View style={Styles.content}>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 5, marginBottom: 6 }}>
              <Text style={{ marginTop: 10, color: "#777777", fontSize: 20, fontWeight: "bold", marginBottom: 10 }}> RESET PASSWORD </Text>
            </View>

            <View style={{ marginBottom: 10 }}>
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <Icon name="key" color="#777777" size={23} />
                <Text style={Styles.textForm}>Password Lama</Text>
              </View>
              <TextInput placeholder="Varifikasi Password Baru" placeholderTextColor="#666666" secureTextEntry={true} style={[Styles.input, { color: Colors.text }]} />
            </View>

            <View style={{ marginBottom: 10 }}>
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <Icon name="key-change" color="#777777" size={23} />
                <Text style={Styles.textForm}>Password Baru</Text>
              </View>
              <TextInput placeholder="Varifikasi Password Baru" placeholderTextColor="#666666" secureTextEntry={true} style={[Styles.input, { color: Colors.text }]} />
            </View>

            <View style={{ marginBottom: 10 }}>
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <Icon name="lock-reset" color="#777777" size={23} />
                <Text style={Styles.textForm}>Verifikasi Password Baru</Text>
              </View>
              <TextInput placeholder="Varifikasi Password Baru" placeholderTextColor="#666666" secureTextEntry={true} style={[Styles.input, { color: Colors.text }]} />
            </View>

            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 50 }}>
              <TouchableOpacity style={Styles.button3}>
                <Icon name="account-edit" color="#ffffff" marg size={23} />
                <Text style={{ color: "white", fontSize: 15, fontWeight: "bold", marginLeft: 3 }}> Simpan </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default EditProfil;
