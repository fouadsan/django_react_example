import axios from "../../utils/axios";
import { Doctor } from "../../utils/models";

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
  SET_DOCTOR_UPDATE_ERROR,
  SET_DOCTOR_UPDATE_LOADING,
  SET_DOCTOR_UPDATE_SUCCESS,
} from "../constants/doctorConstants";

import { closeModal } from "./modal";

export const fetchDoctors = (searchValue, pagination) => {
  let url = "http://127.0.0.1:8000/doctors/api/?limit=10";

  if (searchValue) {
    url += `&search=${searchValue}`;
  }

  if (pagination.next) {
    url = pagination.next;
  } else if (pagination.previous) {
    url = pagination.previous;
  }

  console.log(url);
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_DOCTORS_LOADING,
      });
      const response = await axios.get(url);

      if (response.status !== 200) {
        dispatch({
          type: SET_DOCTORS_ERROR,
          error_msg: "Oops, something went wrong!",
        });
        throw new Error("Oops, something went wrong!");
      }

      const data = await response.data;

      const results = data.results;
      const nextPage = data.next;
      const previousPage = data.previous;

      const loadedDoctors = [];

      results.map((doctor) => {
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
        doctors: {
          list: loadedDoctors,
          next: nextPage,
          previous: previousPage,
        },
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

export const createDoctor = (doctor) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_DOCTOR_CREATE_LOADING,
      });

      const response = await axios.post(
        "http://127.0.0.1:8000/doctors/api/",
        doctor
      );

      if (response.status !== 201) {
        dispatch({
          type: SET_DOCTOR_CREATE_ERROR,
          error_msg: "somthing went wrong!",
        });
        throw new Error("Something went wrong!");
      }

      const data = await response.data;

      dispatch({
        type: SET_DOCTOR_CREATE_SUCCESS,
        payload: data,
      });

      dispatch(closeModal());
    } catch (error) {
      dispatch({
        type: SET_DOCTOR_CREATE_ERROR,
        error_msg:
          error.response && error.response.data.detail
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const deleteDoctor = (doctorId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_DOCTOR_DELETE_LOADING,
      });

      const response = await axios.delete(
        `http://127.0.0.1:8000/doctors/api/${doctorId}/`
      );

      if (response.status !== 204) {
        dispatch({
          type: SET_DOCTOR_DELETE_ERROR,
          error_msg: "somthing went wrong!",
        });
        throw new Error("Something went wrong!");
      }

      const data = await response.data;

      dispatch({
        type: SET_DOCTOR_DELETE_SUCCESS,
        payload: data,
      });

      dispatch(closeModal());
    } catch (error) {
      dispatch({
        type: SET_DOCTOR_DELETE_ERROR,
        error_msg:
          error.response && error.response.data.detail
            ? error.response.data.message
            : error.message,
      });
      dispatch(closeModal());
    }
  };
};

export const updateDoctor = (doctorId, doctor) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_DOCTOR_UPDATE_LOADING,
      });

      const response = await axios.put(
        `http://127.0.0.1:8000/doctors/api/${doctorId}/`,
        doctor
      );

      if (response.status !== 200 && response.status !== 204) {
        dispatch({
          type: SET_DOCTOR_UPDATE_ERROR,
          error_msg: "somthing went wrong!",
        });
        throw new Error("Something went wrong!");
      }

      const data = await response.data;

      dispatch({
        type: SET_DOCTOR_UPDATE_SUCCESS,
        payload: data,
      });

      dispatch(closeModal());
    } catch (error) {
      dispatch({
        type: SET_DOCTOR_UPDATE_ERROR,
        error_msg:
          error.response && error.response.data.detail
            ? error.response.data.message
            : error.message,
      });
    }
  };
};
