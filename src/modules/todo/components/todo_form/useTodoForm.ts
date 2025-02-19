import { ref } from "vue";
import { useTodo } from "../../composable/useTodo";

export function useTodoForm() {
    const { addTodo } = useTodo();
    const newTodo = ref<string>("");

    const handleAdd = () => {
        if (newTodo.value.trim()) {
            addTodo(newTodo.value);
            newTodo.value = "";
        }
    };

    return {
        newTodo,
        handleAdd,
    };
}
