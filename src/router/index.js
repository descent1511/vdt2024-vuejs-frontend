import { createRouter, createWebHistory } from 'vue-router'
const clientId = process.env.VUE_APP_API_URL;
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
    },
    {
      path: '/metrics',
      name: "metric",
      beforeEnter() {
        const metricsUrl = `${clientId}/metrics`;
        window.location.href = metricsUrl;
      }
    },
  ],
});


export default router;