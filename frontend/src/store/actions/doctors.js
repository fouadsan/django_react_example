import axios from "../../utils/axios";
import { Doctor } from "../../utils/models";

import {
  SET_DOCTORS_LOADING,
  SET_DOCTORS_SUCCESS,
  SET_DOCTORS_ERROR,
} from "../constants/doctorConstants";

export const fetchDoctors = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_DOCTORS_LOADING,
      });
      const response = await axios.get();

      if (response.status !== 200) {
        dispatch({
          type: SET_DOCTORS_ERROR,
          error_msg: "Oops, something went wrong!",
        });
        throw new Error("Oops, something went wrong!");
      }

      const data = await response.data;

      const loadedDoctors = [];

      data.map((doctor) => {
        return loadedDoctors.push(
          new Doctor(
            doctor.id,
            doctor.email,
            doctor.first_name,
            doctor.last_name,
            doctor.phone_number,
            doctor.clinic
          )
        );
      });

      dispatch({
        type: SET_DOCTORS_SUCCESS,
        doctors: loadedDoctors,
      });
    } catch (error) {
      dispatch({
        type: SET_DOCTORS_ERROR,
        error_msg:
          error.response && error.response.data.detail
            ? error.response.data.message
            : error.message,
      });
    }
  };
};
