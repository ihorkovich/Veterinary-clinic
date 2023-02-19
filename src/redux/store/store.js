import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../userSlice/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
