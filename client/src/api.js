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

export const eventAPI = {
	addEvent(data) {
		return instance.post("/event/add", data)
	},
	removeEvent(user_id, event_id) {
		return instance.delete("/event/"+ user_id +"/remove/" + event_id)
	},
	getUserEvents(user_id) {
		return instance.get("/event/" + user_id)
	}
}