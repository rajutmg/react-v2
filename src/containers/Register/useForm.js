import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../context/Provider";
import { register } from "../../context/actions/auth/register";
import { useHistory } from "react-router-dom";

export default () => {
  const [form, setForm] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});

  const history = useHistory();

  const {
    authDispatch,
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
      history.push("/auth/login");
    }
  }, [data]);


  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const registerFormValid =
    !form.name?.length ||
    !form.email?.length ||
    !form.password?.length ||
    !form.phone_number?.length ||
    !form.ward_id?.length ||
    !form.municipality_id?.length ||
    !form.company_id?.length;
  const onSubmit = () => {
    setFieldErrors({});
    register(form)(authDispatch);
  };

  return { form, onChange, loading, fieldErrors, registerFormValid, onSubmit };
};
