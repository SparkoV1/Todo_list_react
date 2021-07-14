const dialogsList = ["DELETE_TODO_DIALOG"];

const initialState = {
  isOpened: false,
  data: null,
  onSubmit: null,
  onClose: null,
};

export function createDialogsReducer() {
  const reducers = {};
  dialogsList.forEach((dialogName) => {
    reducers[dialogName] = (state = initialState, action) => {
      if (action.type !== dialogName) {
        return state;
      }
      return {
        ...state,
        isOpened: action.isOpened,
        data: action.data,
        onSubmit: action.onSubmit,
        onClose: action.onClose,
      };
    };
  });
  return reducers;
}
