import { SET_MODAL_OPEN, SET_MODAL_CLOSE } from "../constants/modalConstants";

export const openModal = () => {
  return (dispatch) => {
    dispatch({
      type: SET_MODAL_OPEN,
    });
  };
};

export const closeModal = () => {
  return (dispatch) => {
    dispatch({
      type: SET_MODAL_CLOSE,
    });
  };
};
