import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Countries from "@/views/Countries.vue";
import Country from "@/views/Country.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/countries", name: "Countries", component: Countries },
  { path: "/country/:cca2", name: "Country", component: Country },
  // { path: '*', component: NotFoundComponent }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "is-active",
  linkExactActiveClass: "is-active",
});

export default router;
