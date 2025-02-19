<template>
  <a-config-provider :locale="locale">
    <RouterView />
  </a-config-provider>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import enUS from "@arco-design/web-vue/es/locale/lang/en-us";

const locale = ref(enUS);
</script>
