import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home.vue'
import Homelog from '../views/Homelog.vue'
import mancoll from '../views/mancoll.vue'
import womancoll from '../views/womancoll.vue'
import cart from '../views/Cart.vue'
import preview from '../views/Preview.vue'


const routes = [
    {
        path: '/',
        component: Home
    },

    {
        path: '/Homelog',
        component: Homelog
    },

    {
        path: '/mancoll',
        component: mancoll
    },

    {
        path: '/womancoll',
        component: womancoll
    },

    {
        path: '/Cart',
        component: cart
    },

    {
        path: '/Preview',
        component: preview
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;