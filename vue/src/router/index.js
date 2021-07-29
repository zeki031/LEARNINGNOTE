import Vue from 'vue';
import VueRouter from 'vue-router';
const Home = () => import('@/views/Home/Home.vue');
const Vmodel = () => import('@/views/Vue/Vmodel/Vmodel.vue');
const NotFound = () => import('@/views/Exception/NotFound.vue');
const PropSync = () => import('@/views/Vue/PropSync/PropSync.vue');
const ModelSync = () => import('@/views/Vue/ModelSync/ModelSync.vue');
const Model = () => import('@/views/Vue/Model/Model.vue');
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
      },
      {
        path: 'Model',
        name: 'Model',
        component: Model
      },
      {
        path: 'ModelSync',
        name: 'ModelSync',
        component: ModelSync
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
