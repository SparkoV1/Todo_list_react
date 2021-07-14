import {
  LOGIN_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTRATION_ERROR,
  REGISTRATION_START,
  REGISTRATION_SUCCESS,
} from "../actions/auth.actions";

const initialState = {
  loading: false,
  isAuth: !!localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_KEY),
  user: null,
  loginError: null,
  registrationError: null,
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        loginError: payload,
      };

    case REGISTRATION_START:
      return {
        ...state,
        loading: true,
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case REGISTRATION_ERROR:
      return {
        ...state,
        loading: false,
        registrationError: payload,
      };
    case LOGOUT_SUCCESS:
      return initialState;

    default:
      return state;
  }
}
