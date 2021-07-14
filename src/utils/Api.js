import axios from "axios";
import { STATUS_CODE_401, STATUS_CODE_500 } from "../constants";
import { setInfoPopup } from "../redux/actions/infoPopup.actions";
import store from "../redux/store";
import Logger from "./Logger";

export const REAL_API = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_REAL_API_URL,
});

REAL_API.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_KEY)}`;
  return config;
});

REAL_API.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === STATUS_CODE_401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(`${process.env.REACT_APP_REAL_API_URL}/refresh`, { withCredentials: true });
        localStorage.setItem(process.env.REACT_APP_AUTH_TOKEN_KEY, response.data.accessToken);
        return REAL_API.request(originalRequest);
      } catch (e) {
        Logger.error("Unauthorized");
      }
    } else if (STATUS_CODE_500 === error.response.status) {
      store.dispatch(setInfoPopup("error_500", error.response.data.message));
    }
    throw error;
  },
);

export const FAKE_API = axios.create({
  baseURL: process.env.REACT_APP_FAKE_API_URL,
});
