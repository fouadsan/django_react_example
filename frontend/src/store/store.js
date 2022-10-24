import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { doctorsReducer } from "./reducers/doctors";
import { singleDoctorReducer } from "./reducers/singleDoctor";
import { modalReducer } from "./reducers/modal";

const rootReducer = combineReducers({
  doctors: doctorsReducer,
  singleDoctor: singleDoctorReducer,
  modal: modalReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
