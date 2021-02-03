import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Main from "@/layout/index.vue";
import { PATH_DEFAULT } from '@/constants/url'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Main",
    component: Main,
    redirect: PATH_DEFAULT,
    children: [
      {
        path: "main",
        name: "Main",
        component: () => import("@/components/modules/MainBody/index.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login.vue")
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
