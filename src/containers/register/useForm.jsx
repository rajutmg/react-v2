import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { register } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";

export default () => {
  const [form, setForm] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});

  const history = useHistory();

  const {
    authdispatch,
    authState: {
      auth: { loading, error, data },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    if (error) {
      for (const item in error) {
        setFieldErrors({ ...fieldErrors, [item]: error[item][0] });
      }
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      history.push("auth/login");
    }
  }, [data]);
  console.log("loading", loading);
  console.log("error", error);
  console.log("data", data);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };
  // console.log("form", form);

  const registerFormValid =
    !form.username?.length ||
    !form.firstName?.length ||
    !form.lastName?.length ||
    !form.email?.length ||
    !form.password?.length;

  const onSubmit = (form) => {
    setFieldErrors({});
    register(form)(authdispatch);
  };

  return { form, onChange, loading, fieldErrors, registerFormValid, onSubmit };
};
