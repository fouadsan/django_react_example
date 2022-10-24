import { SET_MODAL_OPEN, SET_MODAL_CLOSE } from "../constants/modalConstants";

export const openModal = (id) => {
  return (dispatch) => {
    dispatch({
      type: SET_MODAL_OPEN,
      payload: id ? id : null,
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
