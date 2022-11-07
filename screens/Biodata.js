import React, { useState, useEffect } from "react";
import Styles from "../style/style";
import { ActivityIndicator, FlatList, Text, View, SafeAreaView, TouchableOpacity, Image } from "react-native";
// import { , Text, View,   StyleSheet, ScrollView, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";

function Biodata({ navigation }) {
  //tampung data dari API
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getUser = async () => {
    try {
      const res = await axios.get("http://192.168.1.8:8080/apiuser");
      setData(res.data);
      // setLoading(false);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text> {item.fullname} </Text>
        <Text> {item.username} </Text>
      </View>
    );
  };

  return (
    <View style={{ marginTop: 80, justifyContent: "center", alignItems: "center" }}>
      <Text> Data Dari API </Text>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>

    // <View style={{ flex: 1, padding: 24 }}>
    //   {isLoading ? <ActivityIndicator/> : (
    //     <FlatList
    //       data={data}
    //       keyExtractor={({ id }, index) => id}
    //       renderItem={({ item }) => (
    //         <Text>{++index} {item.fullname}, {item.username}</Text>
    //       )}
    //     />
    //   )}
    // </View>
  );
}

export default Biodata;
