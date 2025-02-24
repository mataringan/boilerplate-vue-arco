import { reactive, ref, toRefs } from "vue";
import { useTodo } from "../../composable/useTodo";

export function useTodoList() {
    const {
        todos,
        toggleTodo,
        deleteTodo,
        completedTodos,
        pendingTodos,
        updateTodo,
    } = useTodo();

    const editingTodoId = ref<string | null>(null);
    const editingTodo = reactive<{ id: string; title: string }>({
        id: "",
        title: "",
    });
    const startEditing = (record: any) => {
        editingTodoId.value = record.id;
        editingTodo.id = record.id;
        editingTodo.title = record.title;
    };

    const saveEdit = () => {
        if (!editingTodoId.value) return;
        updateTodo(editingTodo.id, editingTodo.title);
        editingTodoId.value = null;
    };

    const cancelEdit = () => {
        if (!editingTodoId.value) return;
        const todo = todos.value.find((t) => t.id === editingTodoId.value);
        if (todo) {
            editingTodo.title = todo.title;
        }
        editingTodoId.value = null;
    };

    return {
        todos,
        toggleTodo,
        deleteTodo,
        completedTodos,
        pendingTodos,
        updateTodo,
        startEditing,
        saveEdit,
        editingTodoId,
        cancelEdit,
        ...toRefs(editingTodo),
    };
}
