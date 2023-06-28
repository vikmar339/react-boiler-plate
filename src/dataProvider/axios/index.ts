import axios from "axios";

const instance = axios.create({
  baseURL: "https://dev.api.botshot.ai:8443/",
  headers: { "Content-Type": "application/json" },
});

export default instance;
