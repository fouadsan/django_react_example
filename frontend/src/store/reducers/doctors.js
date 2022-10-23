import {
  SET_DOCTORS_LOADING,
  SET_DOCTORS_SUCCESS,
  SET_DOCTORS_ERROR,
} from "../constants/doctorConstants";

const initialState = {
  doctors_loading: false,
  doctors_error: {
    status: false,
    msg: "",
  },
  doctors: [],
};

export const doctorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DOCTORS_LOADING:
      return { ...state, doctors_loading: true };

    case SET_DOCTORS_ERROR:
      return {
        ...state,
        doctors_error: { status: true, msg: action.error_msg },
        doctors_loading: false,
      };

    case SET_DOCTORS_SUCCESS:
      return { ...state, doctors: action.doctors, doctors_loading: false };

    default:
      return state;
  }
};
