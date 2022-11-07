import { StyleSheet, Dimensions } from "react-native";

const tinggiCam = Dimensions.get("window").height;
const tinggi = Dimensions.get("window").height;
const tinggiFotBut = Dimensions.get("window").height;
const tinggiMap = Dimensions.get("window").height;

const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA" },

  // SplashScreen
  Splash: {
    width: "76%",
    height: 197,
  },
  // Login
  header2: {
    backgroundColor: "#FFFFFFFF",
    paddingVertical: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  iconLogin: {
    marginTop: 15,
    width: 175,
    height: 175,
  },
  bodyForm: {
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: "#1e5878",
    alignItems: "center",
    // justifyContent: "center",
    height: tinggi / 1.5,
    // elevation: 20,
    // shadowColor: "#000000",
  },
  inputView: {
    width: "85%",
    backgroundColor: "white",
    borderRadius: 25,
    height: 55,
    justifyContent: "center",
    padding: 20,
  },
  btnLogin: {
    width: "45%",
    backgroundColor: "#FF0000",
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 10,
  },
  buttonDisable: {
    width: "45%",
    backgroundColor: "grey",
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 10,
  },
  // btnGgl: {
  //   width: "45%",
  //   backgroundColor: "#FFFFFF",
  //   height: 50,
  //   borderRadius: 25,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginTop: 10,
  //   marginBottom: 10,
  // },
  textFailed: {
    alignSelf: "flex-start",
    marginLeft: 55,
    marginBottom: 15,
    color: "yellow",
  },
  // textdisable: {
  //   color: "white",
  //   fontWeight: "700",
  // },

  // Register
  textRegister: {
    marginTop: 3,
    color: "white",
    fontSize: 33,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 30,
  },

  // HOME
  fprofil: {
    marginTop: 15,
    width: 140,
    height: 140,
    borderRadius: 180,
  },
  submenu: {
    width: 155,
    height: 155,
    // borderStyle: "solid",
    borderWidth: 1,
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
    // elevation: 5,
    shadowColor: "#1e5878",
  },
  submenuImage: {
    width: 90,
    height: 90,
  },
  textMenu: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
  },
  btnOut: {
    borderWidth: 1,
    marginTop: 8,
    marginLeft: 21,
    marginRight: 14,
    width: 334,
    height: 60,
    justifyContent: "center",
  },

  // Edit Profil
  contEdProf: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  button3: {
    flexDirection: "row",
    width: "85%",
    backgroundColor: "#1e5878",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  textBtnEdProf: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 3,
  },

  // Edit Akun
  header3: {
    backgroundColor: "#1e5878",
    paddingVertical: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  textForm: {
    fontWeight: "bold",
    marginTop: 2,
    marginLeft: 10,
    color: "#777777",
    fontSize: 15,
  },

  formdata: {
    flexDirection: "column",
    marginTop: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  // Reset Password

  // Presensi
  bodyPre: {
    flex: 1,
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: tinggiMap / 2,
  },
  fotBut: {
    alignItems: "center",
    backgroundColor: "#1e5878",
    height: tinggiFotBut,
  },

  // Izin Sakit
  button4: {
    width: "80%",
    backgroundColor: "#FF0000",
    borderRadius: 11,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  textareaContainer: {
    height: 150,
  },
  textarea: {
    textAlignVertical: "top", // hack android
    height: 150,
    borderRadius: 10,
    padding: 15,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#1e5878",
    backgroundColor: "#F5FCFF",
  },

  // Biodata Pegawai
  // Riwayat Kehadiran
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  header: {
    backgroundColor: "#1e5878",
    paddingVertical: 35,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  header4: {
    backgroundColor: "#1e5878",
    paddingVertical: 20,
  },

  textStyle: {
    backgroundColor: "#fff",
    fontSize: 15,
    marginTop: 16,
    color: "black",
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  textInput2: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  inputText: {
    height: 80,
    color: "black",
    fontSize: 16,
  },
  buttonStyle: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#DDDDDD",
    padding: 5,
  },
  button: {
    width: "45%",
    backgroundColor: "#FF0000",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  button2: {
    flexDirection: "row",
    width: "85%",
    backgroundColor: "#1e5878",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  submenu2: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 155,
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 12,
    elevation: 13,
    shadowColor: "#52006A",
  },

  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  itemCard: {
    flexDirection: "column",
    marginRight: 10,
    marginVertical: 15,
  },
  itemCardValue: {
    marginVertical: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  TextData: {
    color: "#666666",
    marginTop: 2,
    marginLeft: 5,
    fontSize: 17,
  },
});

export default style;
