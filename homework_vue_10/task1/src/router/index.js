import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DriversView from '../views/drivers/DriversView'
import DriverEdit from '../views/drivers/DriverEdit.vue'
import BusesView from '../views/buses/BusesView.vue'
import BusEdit from '../views/buses/BusEdit.vue'
import AssignmentView from '../views/AssignmentView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/drivers',
        name: 'drivers',
        component: DriversView,
    },
    {
        path: '/drivers/edit/:driverId?',
        name: 'driver-edit',
        component: DriverEdit,
    },
    {
        path: '/buses',
        name: 'buses',
        component: BusesView,
    },
    {
        path: '/buses/edit/:busId?',
        name: 'bus-edit',
        component: BusEdit,
    },
    {
        path: '/assignment',
        name: 'assignment',
        component: AssignmentView,
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
