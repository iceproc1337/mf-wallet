import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    // Solve problem when deploying in relative path
    // https://stackoverflow.com/questions/63526486/vue-router-catch-all-wildcard-not-working
    {
      path: "/:catchAll(.*)",
      name: 'catchAll',
      component: () => import('../views/HomeView.vue')
    }
  ]
})

export default router
