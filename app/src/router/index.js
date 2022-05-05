import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/RegisterView.vue'),
  },
  {
    path: '/reset',
    name: 'reset',
    component: () =>
      import(/* webpackChunkName: "reset" */ '../views/ResetView.vue'),
  },
  {
    path: '/newpass',
    name: 'newpass',
    component: () =>
      import(/* webpackChunkName: "newpass" */ '../views/NewPassView.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () =>
      import(/* webpackChunkName: "dashboard" */ '../views/DashboardView.vue'),
    meta: { dashboardView: true },
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: () =>
          import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue'),
        children: [
          {
            path: '',
            component: () =>
              import(
                /* webpackChunkName: "formgeneral" */ '../components/rFormGeneral.vue'
              ),
            meta: { dashboardView: true },
          },
          {
            path: 'security',
            component: () =>
              import(
                /* webpackChunkName: "formgeneral" */ '../components/rFormNewPass_2.vue'
              ),
            meta: { dashboardView: true },
          },
        ],
      },
    ],
  },
  {
    path: '/tournaments',
    name: 'tournaments',
    component: () =>
      import(
        /* webpackChunkName: "tuournaments" */ '../views/TournamentsView.vue'
      ),
    children: [
      {
        path: 'games',
        name: 'games',
        component: () =>
          import(
            /* webpackChunkName: "tuournaments" */ '@/components/rGamesList.vue'
          ),
      },
      {
        path: ':game',
        component: () =>
          import(/* webpackChunkName: "Game" */ '../views/GameView.vue'),
        children: [
          {
            path: '',
            component: () =>
              import(
                /* webpackChunkName: "gameTournament" */ '@/components/rTournamentsList.vue'
              ),
          },
          {
            path: ':tournamet',
            component: () =>
              import(
                /* webpackChunkName: "gameTournament" */ '@/components/rTournament.vue'
              ),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
