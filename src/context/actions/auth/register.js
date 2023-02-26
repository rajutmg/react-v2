import axiosInstance from "../../../helpers/axiosInstance";
import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "../../../constants/actionTypes";

export const register = ({
  name,
  email,
  password,
  c_password,
  phone_number,
  district_id,
  ward_id,
  municipality_id,
  company_id,
}) => (dispatch) => {
  dispatch({
    type: REGISTER_LOADING,
  });

  axiosInstance()
    .post("/register", {
      name,
      email,
      password,
      c_password,
      phone_number,
      district_id,
      ward_id,
      municipality_id,
      company_id,
    })
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_ERROR,
        payload: err.response ? err.response.data : "COULD NOT CONNECT",
      });
    });
};
