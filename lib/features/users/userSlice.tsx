import { createSlice } from "@reduxjs/toolkit";

const tokenAuthSlice = createSlice({
  name: "myAuth",
  initialState: {
    user: null,
    isAuthenticated: false,
    refresh: null,
    access: null,
  },
  reducers: {
    setBothTokenCredentials: (state, { payload }) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("access", payload.access);
        localStorage.setItem("refresh", payload.refresh);
      }
      state.access = payload.access;
      state.refresh = payload.refresh;
      state.isAuthenticated = true;
    },
    authencticatingSuccess: (state) => {
      state.isAuthenticated = true;
    },
    foundMe: (state, { payload }) => {
      state.user = payload;
      state.isAuthenticated = true;
    },
    authenticatingFail: (state) => {
      state.user = null;
    },
    theAccessTokenCredentials: (state, { payload }) => {
      state.access = payload;
      state.isAuthenticated = true;
    },
    accessTokenCredentialsNotFound: (state) => {
      state.access = null;
      state.isAuthenticated = false;
    },
    logOutUser: (state) => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
      }
      state.user = null;
      state.access = null;
      state.refresh = null;
      state.isAuthenticated = false;
    },
  },
});

export const {
  logOutUser,
  foundMe,
  authenticatingFail,
  theAccessTokenCredentials,
  authencticatingSuccess,
  setBothTokenCredentials,
  accessTokenCredentialsNotFound,

} = tokenAuthSlice.actions;

// export const selectAccessToken = (state) => state.myAuth?.access ?? null;
// export const selectRefreshToken = (state) => state.myAuth?.refresh ?? null;
// export const selectIsAuthenticated = (state) => state.myAuth?.isAuthenticated;

export default tokenAuthSlice.reducer;
