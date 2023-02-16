import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  surname: null,
  email: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUpUser: (state, action) => {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.email = action.payload.email;
    },
    signInUser: (state, action) => {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.email = action.payload.email;
    },
  },
});

export const { signUpUser, signInUser } = userSlice.actions;
export default userSlice.reducer;
