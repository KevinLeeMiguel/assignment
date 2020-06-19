import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/products/new', component: () => import('./views/new_product.vue') },
        { path: '/products/:name', component: () => import('./views/product_preview.vue') }
    ]
})