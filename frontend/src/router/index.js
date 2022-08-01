import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        component: () => import(/* webpackChunkName: "about" */ '../views/SignIn.vue'),
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue'),
    },
    {
        path: '/post-board',
        name: 'PostBoard',
        component: () => import(/* webpackChunkName: "about" */ '../views/PostBoard.vue'),
    },
    
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router