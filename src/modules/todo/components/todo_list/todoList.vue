<template>
  <Tabs>
    <!-- Tab Pending -->
    <TabPane key="pending" title="Pending Todos">
      <Table :columns="todoColumns" :data="pendingTodos">
        <template #completed="{ record }">
          <Switch :model-value="record.completed" @change="toggleTodo(record.id)" />
        </template>
        <template #actions="{ record }">
          <Button type="text" status="danger" @click="deleteTodo(record.id)">Delete</Button>
        </template>
      </Table>
    </TabPane>

    <!-- Tab Completed -->
    <TabPane key="completed" title="Completed Todos">
      <Table :columns="todoColumns" :data="completedTodos">
        <template #completed="{ record }">
          <Switch :model-value="record.completed" @change="toggleTodo(record.id)" />
        </template>
        <template #actions="{ record }">
          <Button type="text" status="danger" @click="deleteTodo(record.id)">Delete</Button>
        </template>
      </Table>
    </TabPane>
  </Tabs>
</template>

<script setup lang="ts">
import { Switch, Button, Table, Tabs, TabPane } from "@arco-design/web-vue";

import { useTodoList } from "./useTodoList";
import { todoColumns } from "../../constants/todo.constant";

const { pendingTodos, completedTodos, toggleTodo, deleteTodo } = useTodoList();
</script>