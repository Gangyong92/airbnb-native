import axios from "axios";
import { call } from "react-native-reanimated";

const callApi = async (method, path, data, jwt) => {
  const headers = {
    Authorization: jwt,
    "Content-Type": "application/json",
  };
  // test시에는  ./ngrok.exe 실행시 발생하는 주소로 baseUrl 변경
  const baseUrl = "https://6fa9783b169e.ngrok.io/api/v1";
  const fullUrl = `${baseUrl}${path}`;

  if (method === "get" || method === "delete") {
    return axios[method](fullUrl, { headers });
  } else {
    return axios[method](fullUrl, data, { headers });
  }
};

export default {
  createAccount: (form) => callApi("post", "/users/", form),
  login: (form) => callApi("post", "/users/login/", form),
  rooms: (page) => callApi(`get", "/rooms/?page=${page}`),
};
