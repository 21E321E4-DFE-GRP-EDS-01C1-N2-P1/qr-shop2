import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Produtos from "../views/Produtos.vue";
import Charge from "../views/Charge.vue";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/produtos",
    component: Produtos,
  },
  {
    path: "/charge",
    component: Charge,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
