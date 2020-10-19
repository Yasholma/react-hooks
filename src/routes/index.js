import Gallery from "../pages/Gallery";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Tensorflow from "../pages/Tensorflow";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    exact: true,
  },
  {
    path: "/tensorflow",
    name: "tensorflow",
    component: Tensorflow,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    guest: true,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    guest: true,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: Gallery,
    requiresAuth: true,
  },
];

export default routes;
