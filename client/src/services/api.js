import axios from "axios";

const api = axios.create({
  baseURL: "https://ninjalogin.onrender.com",
});

export default api;