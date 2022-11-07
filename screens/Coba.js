import React, { Component } from "react";
import { render } from "react-dom";
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

class Coba extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: [],
      fullname: "",
      email: "",
      username: "",
      active: 1,
    };
  }

  getDataUser = () => {
    fetch("http://192.168.1.8:8080/apiuser/")
      .then((response) => response.json())
      .then((json) => this.setState({ dataUser: json }))
      .catch((err) => console.log(err));
  };

  // saveDataUser = () => {
  //   fetch("http://192.168.1.8:8080/apiuser/", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json,",
  //     },
  //     body: JSON.stringify({
  //       fullname: this.state.fullname,
  //       email: this.state.email,
  //       username: this.stausernameame,
  //       active: this.staactiveame,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       json.status == 201 ? Alert.alert("Sukses", "data pegawai berhasil disimpan") : "";
  //     })
  //     .catch((error) => console.log(error));
  // };

  componentDidMount() {
    this.getDataUser();
  }

  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text> asasasa</Text>
        <FlatList
          data={this.state.dataUser}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View style={{ flex: 1, flexDirection: "row", paddingTop: 5, marginTop: 15 }}>
              <Text> {++index} </Text>
              <Text> {item.id} </Text>
              <Text> {item.fullname} </Text>
            </View>
          )}
        />

        {/* <TextInput style={style.input} value={this.state.fullname} onChangeText={(value) => this.setState({ fullname: value })} placeholder="Inputkan data ini" />
        <TextInput style={style.input} value={this.state.email} onChangeText={(value) => this.setState({ email: value })} placeholder="Inputkan data ini" />
        <TextInput style={style.input} value={this.state.username} onChangeText={(value) => this.setState({ username: value })} placeholder="Inputkan data ini" />
        <TextInput style={style.input} value={this.state.active} onChange={(Number) => this.setState({ active: Number })} placeholder="Inputkan data ini" /> */}

        <TouchableOpacity style={style.button}>
          <Text> Simpan </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Coba;

const style = StyleSheet.create({
  input: {
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    width: 200,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "blue",
    marginTop: 10,
    borderRadius: 7,
  },
});
