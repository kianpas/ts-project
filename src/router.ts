import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "./components/page/Home.vue";
import Browse from "./components/page/Browse.vue";
// import Genre from "./components/page/Genre.vue";
// import Actors from "./components/page/Actors.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  { path: "/browse", component: Browse },
  // { path: "/genre", component: Genre },
  // { path: "/actors", component: Actors },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
