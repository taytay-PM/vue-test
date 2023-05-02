import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    //登录界面,path为/时第一个打开
    path: "/",
    name: "login",
    //按需引入
    component: () => import("@/views/login/loginView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
