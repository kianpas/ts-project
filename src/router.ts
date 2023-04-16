import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@components/page/Home.vue";
import Browse from "@components/page/Browse.vue";
import Breeds from "@components/page/Breed.vue";
import TestPage from "@components/page/TestPage.vue";
import TestCard from "@components/card/TestCard.vue";
// import Actors from "./components/page/Actors.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  { path: "/browse", component: Browse },
  {
    path: "/breeds",
    component: Breeds,
    children: [{ path: ":name", component: TestCard, props: true }],
  },

  // { path: "/actors", component: Actors },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
