import Vue from 'vue';
import VueRouter from 'vue-router';
const Home = () => import('@/views/Home/Home.vue');
const Vmodel = () => import('@/views/Vue/Vmodel/Vmodel.vue');
const NotFound = () => import('@/views/Exception/NotFound.vue');
const PropSync = () => import('@/views/vue-property-decoration/PropSync/PropSync.vue');
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/Home/Vmodel'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'Vmodel',
        name: 'Vmodel',
        component: Vmodel
      },
      {
        path: 'PropSync',
        name: 'PropSync',
        component: PropSync
      }
    ]
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
