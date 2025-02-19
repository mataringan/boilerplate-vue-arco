import { useTodo } from "../../composable/useTodo";

export function useTodoList() {
    const { todos, toggleTodo, deleteTodo, completedTodos, pendingTodos } =
        useTodo();

    return {
        todos,
        toggleTodo,
        deleteTodo,
        completedTodos,
        pendingTodos,
    };
}
