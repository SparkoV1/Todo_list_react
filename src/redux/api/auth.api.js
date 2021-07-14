import axios from "axios";
import { ROUTES } from "../../constants";
import { REAL_API } from "../../utils/Api";
import Logger from "../../utils/Logger";
import {
  loginError,
  loginStarted,
  loginSuccess,
  logoutError,
  logoutSuccess,
  registrationError,
  registrationStarted,
  registrationSuccess,
} from "../actions/auth.actions";
import { setInfoPopup } from "../actions/infoPopup.actions";

export const login = (email, password, onSuccess) => {
  const apiUrl = "/login";
  return (dispatch) => {
    dispatch(loginStarted());

    REAL_API.post(apiUrl, { email, password })
      .then(({ data }) => {
        dispatch(loginSuccess(data.user));
        localStorage.setItem(process.env.REACT_APP_AUTH_TOKEN_KEY, data.accessToken);
        onSuccess(ROUTES.todos);
      })
      .catch((error) => {
        dispatch(loginError(error.response.data.message));
        dispatch(setInfoPopup("error", error.response.data.message));
      });
  };
};

export const registration = (email, password, onSuccess) => {
  const apiUrl = "/registration";
  return async (dispatch) => {
    dispatch(registrationStarted());

    try {
      const { data } = await REAL_API.post(apiUrl, { email, password });
      dispatch(registrationSuccess(data.user));
      localStorage.setItem(process.env.REACT_APP_AUTH_TOKEN_KEY, data.accessToken);
      onSuccess();
      dispatch(setInfoPopup("success", "Registration success"));
    } catch (error) {
      Logger.error(error);
      dispatch(registrationError(error.message));
    }
  };
};

export const checkAuth = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_REAL_API_URL}/refresh`, { withCredentials: true });
    dispatch(loginSuccess(data.user));
    localStorage.setItem(process.env.REACT_APP_AUTH_TOKEN_KEY, data.accessToken);
  } catch (error) {
    Logger.error(error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await REAL_API.post("/logout");
    localStorage.removeItem(process.env.REACT_APP_AUTH_TOKEN_KEY);
    dispatch(logoutSuccess());
  } catch (error) {
    Logger.error(error);
    dispatch(logoutError(error.message));
  }
};
