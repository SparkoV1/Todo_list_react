import React, { useMemo } from "react";
import { IconButton, Snackbar } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { setInfoPopup } from "../../redux/actions/infoPopup.actions";

function InfoPopup() {
  const dispatch = useDispatch();

  const { type, message } = useSelector(({ infoPopup }) => ({
    type: infoPopup.type,
    message: infoPopup.message,
  }));

  const { popupType, popupMessage } = useMemo(() => {
    if (!type && !message) {
      return {
        popupType: null,
        popupMessage: "",
      };
    }
    switch (type) {
      case "error_500":
        return {
          popupType: "error",
          popupMessage: message,
        };
      default:
        return {
          popupType: type,
          popupMessage: message,
        };
    }
  }, [message, type]);

  function closeInfoPopup() {
    dispatch(setInfoPopup(null, ""));
  }

  return (
    <Snackbar
      open={!!popupMessage}
      key={message}
      className={`snackbar_${popupType}`}
      message={popupMessage}
      onClose={closeInfoPopup}
      action={
        <IconButton onClick={closeInfoPopup} size="small">
          <Close fontSize="small" />
        </IconButton>
      }
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={3000}
      transitionDuration={{ enter: 200, exit: 0 }}
    />
  );
}

export default InfoPopup;
