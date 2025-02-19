<template>
 <div class="p-6">
    <h1 class="text-2xl font-bold mb-2">Todo List</h1>
    <TodoForm />
    <TodoList />
  </div>
</template>

<script setup lang="ts">
import TodoForm from "../components/todo_form/todoForm.vue";
import TodoList from "../components/todo_list/todoList.vue";

</script>