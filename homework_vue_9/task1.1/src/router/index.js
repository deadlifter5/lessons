import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsList from '../views/ProductsList.vue'
import CategoriesList from '../views/CategoriesList.vue'
import ProductPage from '../views/ProductPage.vue'
import PaymentMethod from '../views/PaymentMethod.vue'
import ProductEdit from '../views/ProductEdit.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/store',
        name: 'store',
        component: CategoriesList,
    },
    {
        path: '/store/:category',
        name: 'products',
        component: ProductsList,
    },
    {
        path: '/product/:productId',
        name: 'product',
        component: ProductPage,
    },
    {
        path: '/edit/:productId?',
        name: 'edit',
        component: ProductEdit,
    },
    {
        path: '/payment',
        name: 'payment',
        component: PaymentMethod,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
