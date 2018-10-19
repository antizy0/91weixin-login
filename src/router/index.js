
import Vue from 'vue';
import Router from 'vue-router';
import viewLogin from "@/views/login";
import viewRegister from "@/views/register";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: "viewLogin",
            component: viewLogin,
        },
        {
            path: '/register',
            name: "viewRegister",
            component: viewRegister,
        },
    ]
});
