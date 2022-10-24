import axios from "../../utils/axios";

import {
  SET_SINGLE_DOCTOR_ERROR,
  SET_SINGLE_DOCTOR_LOADING,
  SET_SINGLE_DOCTOR_SUCCESS,
} from "../constants/singleDoctorConstants";

export const getSingleDoctor = (doctorId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_SINGLE_DOCTOR_LOADING,
      });
      const response = await axios.get(
        `http://127.0.0.1:8000/doctors/api/${doctorId}/`
      );

      if (response.status !== 200) {
        dispatch({
          type: SET_SINGLE_DOCTOR_ERROR,
          error_msg: "Oops, something went wrong!",
        });
        throw new Error("Oops, something went wrong!");
      }

      const data = await response.data;

      dispatch({
        type: SET_SINGLE_DOCTOR_SUCCESS,
        doctor: data,
      });
    } catch (error) {
      dispatch({
        type: SET_SINGLE_DOCTOR_ERROR,
        error_msg:
          error.response && error.response.data.detail
            ? error.response.data.message
            : error.message,
      });
    }
  };
};
