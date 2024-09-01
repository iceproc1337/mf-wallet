import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const useHTML5HistoryMode = import.meta.env.VITE_HISTORY_MODE_HTML5 === 'true';

const router = createRouter({
  history: useHTML5HistoryMode ? createWebHistory(import.meta.env.BASE_URL) : createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'root',
      component: () => import('../views/LoadingView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    // Solve problem when deploying in relative path
    // https://stackoverflow.com/questions/63526486/vue-router-catch-all-wildcard-not-working
    {
      path: "/:catchAll(.*)",
      name: 'catchAll',
      component: () => import('../views/error/404NotFoundView.vue')
    }
  ]
})

export default router
