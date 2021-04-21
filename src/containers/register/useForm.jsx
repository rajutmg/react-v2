import { useState } from "react";

export default () => {
  const [form, setForm] = useState({});
  const onchange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };
  console.log("form", form);

  const registerFormValid =
    !form.username?.length ||
    !form.firstName?.length ||
    !form.lastName?.length ||
    !form.email?.length ||
    !form.password?.length;
  return { form, onchange, registerFormValid };
};
