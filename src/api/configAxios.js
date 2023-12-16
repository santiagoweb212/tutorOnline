import axios from "axios";
const API_BASE_URL = "http://localhost:3001";
const PRODUCTION = "production";
const baseUrl =
  process.env.NODE_ENV === PRODUCTION ? process.env.NODE_DOMAIN : API_BASE_URL;

export const publicApi = axios.create({
  baseURL: baseUrl,
});
