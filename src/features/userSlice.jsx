import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: true,
  type: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    userType : (state,acton)=>{
      state.type = acton.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      state.type = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { loginUser, logoutUser, setLoading, userType } = userSlice.actions;
