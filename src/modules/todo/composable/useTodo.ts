import { storeToRefs } from "pinia";
import { useTodoStore } from "../store/todo";
import { computed } from "vue";

export function useTodo() {
    const store = useTodoStore();
    const { todos } = storeToRefs(store);
    const { addTodo, toggleTodo, deleteTodo, updateTodo } = store;

    const pendingTodos = computed(() => store.pendingTodos);
    const completedTodos = computed(() => store.completedTodos);

    return {
        todos,
        completedTodos,
        pendingTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
        updateTodo,
    };
}
