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

router.beforeEach((to, from, next) => {
  to.meta.startTime = performance.now();
  next();
});

router.afterEach((to) => {
  const endTime = performance.now();
  const loadTime = endTime - to.meta.startTime;
  console.log(`LOADPAGE ${to.path} 200 - ${loadTime.toFixed(2)} ms`);
});
export default router;