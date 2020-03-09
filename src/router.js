import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';


Vue.use(VueRouter)

const routes = [
    { path: "/", component: Login },
    { path: "/dashboard", component: Dashboard },
    { path: "*", redirect: "/" }
]

export const router = new VueRouter({
    mode: "history",
    routes
})