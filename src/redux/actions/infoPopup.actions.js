export const SET_INFO_POPUP = "SET_INFO_POPUP";

export const setInfoPopup = (type, message) => ({
  type: SET_INFO_POPUP,
  payload: { type, message },
});
