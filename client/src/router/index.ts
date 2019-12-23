import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "about",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("../views/Detail.vue")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../views/Add.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
