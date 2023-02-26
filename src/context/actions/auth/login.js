import axiosInstance from "../../../helpers/axiosInstance";
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
<<<<<<< HEAD:src/context/actions/auth/login.jsx
} from "../../../constants/actionTypes/index";

export const login = ({ email, password }) => (dispatch) => {
=======
} from "../../../constants/actionTypes";
export const login = ({ password, username }) => (dispatch) => {
>>>>>>> a38cd17c33a8407cd58848f9a0936c7475ba66ae:src/context/actions/auth/login.js
  dispatch({
    type: LOGIN_LOADING,
  });

  axiosInstance()
    .post("/login", {
      email,
      password,
    })
    .then((res) => {
      localStorage.token = res.data.token;
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_ERROR,
        payload: err.response ? err.response.data : "COULD NOT CONNECT",
      });
    });
};
