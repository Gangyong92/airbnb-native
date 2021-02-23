import axios from "axios";

const callApi = async (method, path, data, jwt) => {
  const headers = {
    Authorization: jwt !== undefined ? `Bearer ${jwt}` : null,
    "Content-Type": "application/json",
  };

  // test시에는  ./ngrok.exe 실행시 발생하는 주소로 baseUrl 변경
  const baseUrl = "https://2c06b6be5946.ngrok.io/api/v1";
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
  // rooms에서 token 보내 주는 이유는 explore에서 favs 여부를 알려면 token을 보내줘야 하기 때문임.
  rooms: (page = 1, token) =>
    callApi("get", `/rooms/?page=${page}`, null, token),
  favs: (id, token) => callApi("get", `/users/${id}/favs/`, null, token),
  toggleFavs: (userId, roomId, token) =>
    callApi("put", `/users/${userId}/favs/`, { pk: roomId }, token),
};
