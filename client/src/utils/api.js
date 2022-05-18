import axios from "axios";

export const axios_cu_cred = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
  headers: { "content-type": "application/json" },
  method: "POST",
});

export const axios_fara_cred = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
  headers: { "content-type": "application/json" },
  method: "POST",
});
