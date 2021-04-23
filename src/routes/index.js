import RegisterComponent from "../containers/register/index";
import LoginComponent from "../containers/login/index";
import ContactsComponent from "../containers/contacts/index";
import CreateContactComponent from "../containers/createcontact/index";

const routes = [
  {
    path: "/auth/register",
    component: RegisterComponent,
    title: "Register",
    needsAuth: false,
  },
  {
    path: "/auth/login",
    component: LoginComponent,
    title: "Login",
    needsAuth: false,
  },
  {
    path: "/",
    component: ContactsComponent,
    title: "Contacts",
    needsAuth: true,
  },
  {
    path: "/contacts/create",
    component: CreateContactComponent,
    title: "Create Contact",
    needsAuth: true,
  },
];

export default routes;
