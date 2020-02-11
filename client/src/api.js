import * as axios from "axios";

const api_path = "http://localhost:9000/api";

const header_json = {
   headers: {
      'Content-Type': 'application/json'
   }
}

export const register = (data) => {
   return axios.post(api_path + "/user/register", data, header_json)
}

export const login = (data) => {
   return axios.post(api_path + "/user/login", data, header_json)
}