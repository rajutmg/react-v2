import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../context/Provider";
import { useHistory } from "react-router-dom";
import { login } from "../../context/actions/auth/login";

export default () => {
  const [form, setForm] = useState({});

  const history = useHistory();

  const {
    authDispatch,
    authState: {
      auth: { loading, error, data },
    },
  } = useContext(GlobalContext);


  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

<<<<<<< HEAD:src/containers/login/useForm.jsx
  console.log("form", form);
  const loginFormValid = !form.email?.length || !form.password?.length;
=======

  const loginFormValid = !form.username?.length || !form.password?.length;
>>>>>>> a38cd17c33a8407cd58848f9a0936c7475ba66ae:src/containers/Login/useForm.js

  const onSubmit = () => {
    // register(form)(authDispatch);

    login(form)(authDispatch);
  };

  useEffect(() => {
    if (data) {
      history.push("/user");
    }
  }, [data]);

  return { form, onChange, loading, error, loginFormValid, onSubmit };
};
