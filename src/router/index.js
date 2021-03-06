import Vue from 'vue';
import VueRouter from 'vue-router';
import Maths from '../pages/Maths.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Maths',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Maths,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
