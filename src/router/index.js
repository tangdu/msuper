import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    name: "topics",
    path: "/user",
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('../views/user.vue')
  }
]

const router = new Router({
    routes
})

export default router;
