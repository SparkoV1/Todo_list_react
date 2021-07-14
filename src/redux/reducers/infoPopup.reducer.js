import { SET_INFO_POPUP } from "../actions/infoPopup.actions";

const initialState = {
  type: null,
  message: "",
};

export default function infoPopupReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_INFO_POPUP:
      return { ...state, type: payload.type, message: payload.message };
    default:
      return state;
  }
}
