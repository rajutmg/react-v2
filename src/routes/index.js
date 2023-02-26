<<<<<<< HEAD
import RegisterComponent from "../containers/register/index";
import LoginComponent from "../containers/login/index";
import Home from "../components/home/Home";
import Profile from "../components/Profile";
=======
import { lazy } from "react";

import RegisterComponent from "../containers/Register";
import LoginComponent from "../containers/Login";
import ContactsComponent from "../containers/Contacts";

const CreateContactComponent = lazy(() =>
  import("../containers/CreateContact")
);
>>>>>>> a38cd17c33a8407cd58848f9a0936c7475ba66ae

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
<<<<<<< HEAD
    path: "/user",
    component: Profile,
    title: "Profile",
    needsAuth: true,
  },
  {
    path: "/",
    component: Home,
    title: "Home",
    needsAuth: false,
=======
    path: "/contacts/create",
    component: CreateContactComponent,
    title: "Create Contact",
    needsAuth: true,
>>>>>>> a38cd17c33a8407cd58848f9a0936c7475ba66ae
  },
  {
    path: "/",
    component: ContactsComponent,
    title: "Contacts",
    needsAuth: true,
  },
];

export default routes;
