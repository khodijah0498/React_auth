import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";

//TODO:redux-persist

export default configureStore({
  reducer: authReducer,
});

