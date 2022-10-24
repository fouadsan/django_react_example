import {
  SET_DOCTORS_LOADING,
  SET_DOCTORS_SUCCESS,
  SET_DOCTORS_ERROR,
  SET_DOCTOR_CREATE_LOADING,
  SET_DOCTOR_CREATE_ERROR,
  SET_DOCTOR_CREATE_SUCCESS,
  SET_DOCTOR_DELETE_ERROR,
  SET_DOCTOR_DELETE_LOADING,
  SET_DOCTOR_DELETE_SUCCESS,
  SET_DOCTOR_UPDATE_LOADING,
  SET_DOCTOR_UPDATE_ERROR,
  SET_DOCTOR_UPDATE_SUCCESS,
} from "../constants/doctorConstants";

const initialState = {
  doctors_loading: false,
  doctors_error: {
    status: false,
    msg: "",
  },
  doctors: {
    list: [],
    next: null,
    previous: null,
  },
  message: "",
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
      return {
        ...state,
        doctors: {
          list: action.doctors.list,
          next: action.doctors.next,
          previous: action.doctors.previous,
        },
        doctors_loading: false,
      };

    case SET_DOCTOR_CREATE_LOADING:
      return { ...state, doctors_loading: true };

    case SET_DOCTOR_CREATE_ERROR:
      return {
        ...state,
        doctors_error: { status: true, msg: action.error_msg },
        doctors_loading: false,
      };

    case SET_DOCTOR_CREATE_SUCCESS:
      return {
        ...state,
        doctors: {
          ...state.doctors,
          list: action.payload,
        },
        message: "Created",
        doctors_loading: false,
      };

    case SET_DOCTOR_DELETE_LOADING:
      return { ...state, doctors_loading: true };

    case SET_DOCTOR_DELETE_ERROR:
      return {
        ...state,
        doctors_error: { status: true, msg: action.error_msg },
        doctors_loading: false,
      };

    case SET_DOCTOR_DELETE_SUCCESS:
      return {
        ...state,
        doctors: {
          ...state.doctors,
          list: action.payload,
        },
        message: "Deleted",
        doctors_loading: false,
      };

    case SET_DOCTOR_UPDATE_LOADING:
      return { ...state, doctors_loading: true };

    case SET_DOCTOR_UPDATE_ERROR:
      return {
        ...state,
        doctors_error: { status: true, msg: action.error_msg },
        doctors_loading: false,
      };

    case SET_DOCTOR_UPDATE_SUCCESS:
      return {
        ...state,
        doctors: {
          ...state.doctors,
          list: action.payload,
        },
        message: "Updated",
        doctors_loading: false,
      };

    default:
      return state;
  }
};
