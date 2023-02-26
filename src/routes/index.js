import RegisterComponent from "../containers/register/index";
import LoginComponent from "../containers/login/index";
import Home from "../components/home/Home";
import Profile from "../components/Profile";

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
  },
];

export default routes;
