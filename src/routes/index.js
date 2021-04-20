import RegisterComponent from "../containers/register/index";
import LoginComponent from "../containers/login/index";
import ContactsComponent from "../containers/contacts/index";
import CreateContactComponent from "../containers/createcontact/index";

const routes = [
  {
    path: "/auth/register",
    component: RegisterComponent,
    title: "Register",
  },
  {
    path: "/auth/login",
    component: LoginComponent,
    title: "Login",
  },
  {
    path: "/",
    component: ContactsComponent,
    title: "Contacts",
  },
  {
    path: "/contacts/create",
    component: CreateContactComponent,
    title: "Create Contact",
  },
];

export default routes;
