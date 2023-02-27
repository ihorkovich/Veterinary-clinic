import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  name: null,
  surname: null,
  email: null,
  role: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
    resetState: () => {
      return initialState;
    },
  },
});

export const { setUser, resetState } = userSlice.actions;
export default userSlice.reducer;
