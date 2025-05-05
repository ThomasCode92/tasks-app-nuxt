<script setup lang="ts">
const { data: tasks } = await useFetch("/api/tasks");
</script>

<template>
  <div>
    <article v-for="task in tasks" :key="task.id">
      {{ task.title }}
    </article>
  </div>
</template>
