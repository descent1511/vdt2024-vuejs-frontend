import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomePage.vue"),  
    },

    {
      path: '/profile/:id',
      name: "profile",
      component: () => import("../views/ProfilePage.vue"),
      props: true,
    }
  ],
});
export default router;