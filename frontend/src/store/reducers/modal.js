import { SET_MODAL_OPEN, SET_MODAL_CLOSE } from "../constants/modalConstants";

const initialState = {
  is_open: false,
  id: null,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_OPEN:
      return { is_open: true, id: action.payload };

    case SET_MODAL_CLOSE:
      return { is_open: false, id: null };

    default:
      return state;
  }
};
