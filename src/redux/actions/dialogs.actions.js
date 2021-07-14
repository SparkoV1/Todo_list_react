import Logger from "../../utils/Logger";

function setDialog(dialogName, isOpened, data, onSubmit, onClose) {
  return {
    type: dialogName,
    isOpened: isOpened,
    data: isOpened ? data : null,
    onSubmit: onSubmit,
    onClose: onClose,
  };
}

export const toggleGlobalDialog =
  (dialogName, isOpened, data = null, onSubmit = null, onClose = null) =>
  (dispatch) => {
    Logger.info(`SetDialog "${dialogName}": state: "${isOpened}" with data`, data);
    dispatch(setDialog(dialogName, isOpened, data, onSubmit, onClose));
  };
