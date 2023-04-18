import { createWebHistory, createRouter } from "vue-router";

const routes = [

    {
        path: "/",
        name: "login",
        component: () => import("@/views/Login.vue"),
    },
    {
        path: "/signup",
        name: "signup",
        component: () => import("@/views/Signup.vue"),
    },
    {
        path: "/congvan",
        name: "congvan",
        component: () => import("@/views/Congvan.vue"),
    },
    {
        path: "/home",
        name: "home",
        component: () => import("@/views/Home.vue"),
    },
    {
        path: "/gioithieu",
        name: "gioithieu",
        component: () => import("@/views/Gioithieu.vue"),
    },

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
