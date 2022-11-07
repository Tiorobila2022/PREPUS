import axios from "axios";

const http = axios.create({
  withCredentials: true,
  baseURL: "http://192.168.130.226:8080/",
  responseType: "json",
});

export default http;
