import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator } from "react-native";

const jadwalURL = "http://localhost:8080/apijadwal";

const Jadwal = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(jadwalURL)
      //   .then((response) => response.json())
      .then((json) => console.log(json))
      .then((json) => setData(json.apijadwal))
      .catch((error) => alert(error))
      .finally(setLoading(false));
  });

  return (
    <SafeAreaView style={Styles.container}>
      {isLoading ? <ActivityIndicator /> : <FlatList />}

      <Text>Uji Coba</Text>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Jadwal;
