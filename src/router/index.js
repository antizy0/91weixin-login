
import Vue from 'vue';
import Router from 'vue-router';
import viewLogin from "@/views/login";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: "login",
            component: viewLogin,
        },
    ]
});
