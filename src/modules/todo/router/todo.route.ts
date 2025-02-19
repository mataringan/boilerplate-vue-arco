import type { RouteRecordRaw } from "vue-router";
import TodoView from "../views/TodoView.vue";

const todoRoutes: RouteRecordRaw[] = [
    {
        path: "/",
        component: TodoView,
        name: "Todo",
    },
];

export default todoRoutes;
