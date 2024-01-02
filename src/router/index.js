import "vue-router";
import { createWebHistory, createRouter } from "vue-router";


const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../../src/views/Home.vue"),
    },
    {
        path: "/honey",
        name: "Honey",
        component: () => import( "../../src/views/Honey.vue"),
    },
    {
        path: "/beeswax",
        name: "Beeswax",
        component: () => import("../../src/views/Beeswax.vue")
    },
    {
        path: "/mead",
        name: "Mead",
        component: () => import("../../src/views/Mead.vue")
    },    {
        path: "/classes",
        name: "Classes",
        component: () => import( "../../src/views/Classes.vue"),
    },
    {
        path: "/newbees",
        name: "Newbees",
        component: () => import("../../src/views/Newbees.vue")
    },
    {
        path: "/learnbees",
        name: "Learnbees",
        component: () => import("../../src/views/Learnbees.vue")
    },
    {
        path: "/protips",
        name: "Protips",
        component: () => import("../../src/views/Protips.vue")
    },
    {
        path: '/home',
        name: "HomeView",
        component: () => import("../../src/views/Home.vue"),
    },
    {
        path:'/catchAll(.*)*',
        name: "Any",
        component: () => import("../../src/views/Home.vue"),
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;