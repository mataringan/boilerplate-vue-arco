<template>
  <div class="flex gap-4 items-center p-4">
    <Input v-model="newTodo" placeholder="Add Todo..." class="w-80" />
    <Button type="primary" @click="handleAdd">Add</Button>
  </div>
</template>

<script setup lang="ts">
import { Input, Button } from "@arco-design/web-vue";
import { useTodoForm } from "./useTodoForm";

const { newTodo, handleAdd } = useTodoForm()
</script>