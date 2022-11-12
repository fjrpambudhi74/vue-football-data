import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    component: () => import("../layout/LayoutPage.vue"),
    redirect: { name: "areas" },
    children: [
      {
        path: "/areas",
        name: "areas",
        component: () => import("../pages/AreasView.vue"),
      },
      {
        path: "/competition",
        name: "competition",
        component: () => import("../pages/CompetitionView.vue"),
      },
      {
        path: "/clubs",
        name: "clubs",
        component: () => import("../pages/ClubsView.vue"),
      },
      {
        path: "/club-profile",
        name: "club-profile",
        component: () => import("../pages/ClubProfile.vue"),
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../pages/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
