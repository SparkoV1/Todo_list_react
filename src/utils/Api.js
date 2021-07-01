import axios from "axios";

export const FAKE_API = axios.create({
  baseURL: process.env.REACT_APP_FAKE_API_URL,
});
