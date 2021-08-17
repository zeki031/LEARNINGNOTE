import Vue from 'vue';
import VueRouter from 'vue-router';
const Home = () => import('@/views/Home/Home.vue');
const NotFound = () => import('@/views/Exception/NotFound.vue');
const PropSync = () => import('@/views/Vue/PropSync/PropSync.vue');
const ModelSync = () => import('@/views/Vue/ModelSync/ModelSync.vue');
const Model = () => import('@/views/Vue/Model/Model.vue');
const Watch = () => import('@/views/Vue/Watch/Watch.vue');
const Provide = () => import('@/views/Vue/Provide/Provide.vue');
const Emit = () => import('@/views/Vue/Emit/Emit.vue');
const Ref = () => import('@/views/Vue/Ref/Ref.vue');
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/Home/PropSync'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    children: [
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
      },
      {
        path: 'Watch',
        name: 'Watch',
        component: Watch
      },
      {
        path: 'Provide',
        name: 'Provide',
        component: Provide
      },
      {
        path: 'Emit',
        name: 'Emit',
        component: Emit
      },
      {
        path: 'Ref',
        name: 'Ref',
        component: Ref
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
