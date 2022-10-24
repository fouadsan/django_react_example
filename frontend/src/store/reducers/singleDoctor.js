import {
  SET_SINGLE_DOCTOR_ERROR,
  SET_SINGLE_DOCTOR_LOADING,
  SET_SINGLE_DOCTOR_SUCCESS,
} from "../constants/singleDoctorConstants";

const initialState = {
  doctor_loading: false,
  doctor_error: {
    status: false,
    msg: "",
  },
  doctor: null,
};

export const singleDoctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_DOCTOR_LOADING:
      return { ...state, doctor_loading: true };

    case SET_SINGLE_DOCTOR_ERROR:
      return {
        ...state,
        doctor_error: { status: true, msg: action.error_msg },
        doctor_loading: false,
      };

    case SET_SINGLE_DOCTOR_SUCCESS:
      return {
        ...state,
        doctor: action.doctor,
        doctor_loading: false,
      };

    default:
      return state;
  }
};
