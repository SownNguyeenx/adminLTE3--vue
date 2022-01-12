import Vue from "vue";
import VueRouter from "vue-router";
import Post from "../components/modules/Post.vue";
import Setting from "../components/modules/Setting.vue";
import Home from "../components/Home.vue"

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        // { path: "/", component: Home },
        { path: "/post", component: Post },
        { path: "/setting", component: Setting },
      ],
    },

    { path: "*", redirect: "/" },
  ],
});