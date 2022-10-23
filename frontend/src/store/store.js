import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";

import { doctorsReducer } from "./reducers/doctors";
import { modalReducer } from "./reducers/modal";

const rootReducer = combineReducers({
  doctors: doctorsReducer,
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
