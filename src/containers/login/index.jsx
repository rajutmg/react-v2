import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/Provider";
import LoginUI from "../../layout/login";
import useForm from "./useForm";
const LoginContainer = () => {
  const {
    authdispatch,
    authState: {
      auth: { loading, error, data },
    },
  } = useContext(GlobalContext);
  console.log("data", data);
  return <LoginUI form={useForm()} />;
};

export default LoginContainer;
