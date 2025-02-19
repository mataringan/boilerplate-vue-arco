import {
    createRouter,
    createWebHistory,
    type RouteRecordRaw,
} from "vue-router";

const routeFiles = import.meta.glob("../modules/**/router/*.route.ts", {
    eager: true,
});

const routes: RouteRecordRaw[] = [];

Object.values(routeFiles).forEach((module: any) => {
    if (module.default) {
        routes.push(...module.default);
    }
});

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
