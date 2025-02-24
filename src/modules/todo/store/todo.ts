import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";
import type { TodoState, Todo } from "../interfaces/todo.interface";

export const useTodoStore = defineStore("todo", {
    state: (): TodoState => ({
        todos: [],
    }),
    actions: {
        addTodo(title: string) {
            this.todos.push({
                id: uuid(),
                title,
                completed: false,
            });
        },
        toggleTodo(id: string) {
            const todo = this.todos.find((t) => t.id === id);
            if (todo) todo.completed = !todo.completed;
        },
        deleteTodo(id: string) {
            this.todos = this.todos.filter((t) => t.id !== id);
        },
        updateTodo(id: string, newTitle: string) {
            const todo = this.todos.find((t) => t.id === id);
            if (todo) todo.title = newTitle;
        },
    },
    getters: {
        completedTodos: (state): Todo[] =>
            state.todos.filter((t) => t.completed),
        pendingTodos: (state): Todo[] =>
            state.todos.filter((t) => !t.completed),
    },
    persist: {
        key: "todo_list",
    },
});
