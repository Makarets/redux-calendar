import * as axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:9000/api",
	headers: {
	  'Content-Type': 'application/json'
	}
})

export const authAPI = {
	signup(data) {
	   return instance.post("/user/register", data)
	},
	login(data) {
   		return instance.post("/user/login", data)
	}
}
